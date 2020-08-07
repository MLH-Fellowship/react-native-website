/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const tokenizeComment = require('tokenize-comment');
const {
  formatMultiplePlatform,
  maybeLinkifyType,
  maybeLinkifyTypeName,
  formatTypeColumn,
  formatDefaultColumn,
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
      Type: formatTypeColumn(prop),
      ...formatDefaultColumn(prop),
    },
  ]);

  return (
    '### ' +
    (prop.required ? '<div class="label required basic">Required</div>' : '') +
    '`' +
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
  let descriptionTokenized = '';
  let header = 'Valid `params` keys are:';
  let mdPoints = '';
  if (method?.params[0]?.type?.raw) {
    let desc = method?.params[0]?.type?.raw;
    let len = method?.params[0]?.type?.signature?.properties?.length;
    descriptionTokenized = tokenizeComment(desc);

    if (
      descriptionTokenized?.examples &&
      descriptionTokenized?.examples.length === len
    ) {
      let obj = [];
      for (let i = 0; i < len; i++) {
        let newObj = method?.params[0]?.type?.signature?.properties[i];
        newObj['description'] = descriptionTokenized?.examples[i]?.value;
        obj.push(newObj);
      }

      obj.map(item => {
        mdPoints += `- '${item.key}' (${item.value.name}) - ${
          item.description
        }`;
      });

      method.params[0]['description'] = 'See below';
    }
  }

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
    // generateMethodSignatureBlock(method, component) +
    (method.description ? method.description + '\n\n' : '') +
    generateMethodSignatureTable(method, component) +
    infoTable +
    (mdPoints && header + '\n' + mdPoints)
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
        Type: param.type ? param.type.type : '',
        Required: param.optional ? 'No' : 'Yes',
        ...(param.description && {Description: param.description}),
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
      .sort((a, b) => a.localeCompare(b))
      .sort((a, b) => props[b].required - props[a].required)
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

  desc = desc
    .split('\n')
    .map(line => {
      return line.replace(/  /, '');
    })
    .join('\n');

  const descriptionTokenized = tokenizeComment(desc);
  // Tabs counter for examples
  let tabs = 0;
  descriptionTokenized.examples.map(item => {
    const matchSnackPlayer = item.language.match(/(SnackPlayer name=).*/g);
    if (matchSnackPlayer) {
      const matchClassComp = matchSnackPlayer[0].match(
        /Class%20Component%20Example/
      );
      const matchFuncComp = matchSnackPlayer[0].match(
        /Function%20Component%20Example/
      );
      if (matchClassComp || matchFuncComp) tabs++;
    }
  });

  if (tabs === 2) {
    const wrapper = `${playgroundTab}\n\n${functionalBlock}\n\n${
      descriptionTokenized.examples[0].raw
    }\n\n${classBlock}\n\n${
      descriptionTokenized.examples[1].raw
    }\n\n${endBlock}`;
    return (
      descriptionTokenized.description +
      `\n## Example\n` +
      wrapper +
      '\n' +
      descriptionTokenized?.footer
    );
  } else {
    return (
      desc.substr(0, desc.search('```SnackPlayer')) +
      '\n' +
      '\n## Example\n' +
      '\n' +
      desc.substr(desc.search('```SnackPlayer'))
    );
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
