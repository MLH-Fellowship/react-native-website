/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const tokenizeComment = require('tokenize-comment');
const {
  formatPlatformName,
  formatMultiplePlatform,
  formatDefaultPlatformProp,
  formatMultipleRowProp,
  maybeLinkifyType,
  maybeLinkifyTypeName,
} = require('./propFormatter');

// Formats an array of rows as a Markdown table
function generateTable(rows) {
  const colWidths = new Map();
  for (const row of rows) {
    for (const col of Object.keys(row)) {
      colWidths.set(
        col,
        Math.max(colWidths.get(col) || col.length, String(row[col]).length)
      );
    }
  }
  if (!colWidths.size) {
    return '';
  }
  let header = '|',
    divider = '|';
  for (const [col, width] of colWidths) {
    header += ' ' + col.padEnd(width + 1) + '|';
    divider += ' ' + '-'.repeat(width) + ' ' + '|';
  }

  let result = header + '\n' + divider + '\n';
  for (const row of rows) {
    result += '|';
    for (const [col, width] of colWidths) {
      result += ' ' + String(row[col] || '').padEnd(width + 1) + '|';
    }
    result += '\n';
  }
  return result;
}

// Formats information about a prop
function generateProp(propName, prop) {
  const infoTable = generateTable([
    {
      Type:
        prop.rnTags && prop.rnTags.type
          ? formatMultipleRowProp(propName, prop, prop.rnTags.type)
          : maybeLinkifyType(prop.flowType),
      Required: prop.required ? 'Yes' : 'No',
      ...(prop.rnTags && prop.rnTags.default
        ? {
            Default: formatMultipleRowProp(propName, prop, prop.rnTags.default),
          }
        : prop.defaultValue &&
          prop.defaultValue.value &&
          (prop.defaultValue.value.includes('Platform.OS')
            ? {
                Default: formatMultipleRowProp(
                  propName,
                  prop,
                  prop.defaultValue.value
                ),
              }
            : {Default: '`' + prop.defaultValue.value + '`'})),
    },
  ]);

  return (
    '### `' +
    propName +
    '`' +
    (prop.rnTags && prop.rnTags.platform
      ? formatMultiplePlatform(prop.rnTags.platform)
      : '') +
    '\n' +
    '\n' +
    (prop.description ? prop.description + '\n\n' : '') +
    infoTable
  );
}

// Formats information about a prop
function generateMethod(method, component) {
  const infoTable = generateTable([
    {
      ...(method.rnTags && method.rnTags.platform
        ? {Platform: formatPlatformName(method.rnTags.platform)}
        : {}),
    },
  ]);

  return (
    '### `' +
    method.name +
    '()`' +
    '\n' +
    '\n' +
    generateMethodSignatureBlock(method, component) +
    (method.description ? method.description + '\n\n' : '') +
    generateMethodSignatureTable(method, component) +
    infoTable
  ).trim();
}

function lowerFirst(s) {
  return s[0].toLowerCase() + s.slice(1);
}

function generateMethodSignatureBlock(method, component) {
  return (
    '```jsx\n' +
    (method.modifiers.includes('static')
      ? component.displayName + '.'
      : lowerFirst(component.displayName + '.')) +
    method.name +
    '(' +
    method.params
      .map(param => (param.optional ? `[${param.name}]` : param.name))
      .join(', ') +
    ');' +
    '\n' +
    '```\n\n'
  );
}

function generateMethodSignatureTable(method, component) {
  if (!method.params.length) {
    return '';
  }
  return (
    '**Parameters:**\n\n' +
    generateTable(
      method.params.map(param => ({
        Name: param.name,
        Type: param.type ? maybeLinkifyType(param.type) : '',
        Required: param.optional ? 'No' : 'Yes',
        Description: param.description,
      }))
    )
  );
}

// Formats information about props
function generateProps({props, composes}) {
  if (!props || !Object.keys(props).length) {
    return '';
  }

  return (
    '## Props' +
    '\n' +
    '\n' +
    (composes && composes.length
      ? composes
          .map(parent => 'Inherits ' + maybeLinkifyTypeName(parent) + '.')
          .join('\n\n') + '\n\n'
      : '') +
    Object.keys(props)
      .sort()
      .map(function(propName) {
        return generateProp(propName, props[propName]);
      })
      .join('\n\n---\n\n')
  );
}

function generateMethods(component) {
  const {methods} = component;
  if (!methods || !methods.length) {
    return '';
  }

  return (
    '## Methods' +
    '\n' +
    '\n' +
    [...methods]
      .sort((a, b) =>
        a.name.localeCompare(
          b.name /* TODO @nocommit what's a neutral locale */
        )
      )
      .map(function(method) {
        return generateMethod(method, component);
      })
      .join('\n\n---\n\n')
  );
}

// Generates a Docusaurus header for a component page
function generateHeader({id, title}) {
  return (
    '---' + '\n' + 'id: ' + id + '\n' + 'title: ' + title + '\n' + '---' + '\n'
  );
}

// Function to process example contained description
function preprocessDescription(desc) {
  // Playground tabs for the class and functional components
  const playgroundTab = `<div class="toggler">
    <ul role="tablist" class="toggle-syntax">
      <li id="functional" class="button-functional" aria-selected="false" role="tab" tabindex="0" aria-controls="functionaltab" onclick="displayTabs('syntax', 'functional')">
        Function Component Example
      </li>
      <li id="classical" class="button-classical" aria-selected="false" role="tab" tabindex="0" aria-controls="classicaltab" onclick="displayTabs('syntax', 'classical')">
        Class Component Example
      </li>
    </ul>
  </div>`;

  //Blocks for different syntax sections
  const functionalBlock = `<block class='functional syntax' />`;
  const classBlock = `<block class='classical syntax' />`;
  const endBlock = `<block class='endBlock syntax' />`;
  const descriptionTokenized = tokenizeComment(desc);
  // Tabs counter for examples
  let tabs = 0;
  descriptionTokenized.examples.map(item =>
    item.language.includes('SnackPlayer') ? tabs++ : tabs
  );
  if (descriptionTokenized.examples.length > 0 && tabs === 2) {
    const wrapper = `${playgroundTab}\n\n${functionalBlock}\n\n${
      descriptionTokenized.examples[0].raw
    }\n\n${classBlock}\n\n${
      descriptionTokenized.examples[1].raw
    }\n\n${endBlock}`;
    return descriptionTokenized.description + wrapper;
  }
  if (descriptionTokenized.examples.length > 0 && tabs === 1) {
    return (
      descriptionTokenized.description +
      '\n' +
      descriptionTokenized?.examples[0]?.description +
      '\n' +
      descriptionTokenized?.examples[0]?.raw +
      '\n## Example\n' +
      descriptionTokenized?.examples[1]?.raw
    );
  } else {
    return descriptionTokenized.description;
  }
}

function generateMarkdown({id, title}, component) {
  const markdownString =
    generateHeader({id, title}) +
    '\n' +
    preprocessDescription(component.description) +
    '\n\n' +
    '---\n\n' +
    '# Reference\n\n' +
    generateProps(component) +
    generateMethods(component);

  return markdownString.replace(/\n{3,}/g, '\n\n');
}

module.exports = generateMarkdown;
