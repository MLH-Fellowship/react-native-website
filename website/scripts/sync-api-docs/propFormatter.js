/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const {typeOf} = require('tokenize-comment/lib/utils');
const he = require('he');
const magic = require('./magic');

// Adds platform tags on props
function formatPlatformName(platform) {
  switch (platform.toLowerCase()) {
    case 'ios':
      return '<div class="label ios">' + 'iOS' + '</div> ';
    case 'android':
      return '<div class="label android">' + 'Android' + '</div>';
    case 'tv':
      return '<div class="label tv">' + 'TV' + '</div>';
  }
}

// Adds multiple platform tags for prop name
function formatMultiplePlatform(platforms) {
  let platformString = '';
  platforms.forEach(platform => {
    switch (platform.trim()) {
      case 'ios':
        platformString += '<div class="label ios">' + 'iOS' + '</div> ';
        break;
      case 'android':
        platformString += '<div class="label android">' + 'Android' + '</div>';
        break;
      case 'tv':
        platformString += '<div class="label tv">' + 'TV' + '</div>';
    }
  });
  return platformString;
}

// Adds platform tag inside default value of props
function formatDefaultPlatformProp(defaultProps, propName) {
  const platformDefaultProps = Object.entries(JSON.parse(defaultProps));
  const formattedProps = [];
  for (const [platform, value] of platformDefaultProps) {
    formattedProps.push('`' + value + '`' + formatPlatformName(platform));
  }
  return formattedProps;
}

// Generates rows for different platform dependent props
function formatMultipleRowProp(propName, prop, item) {
  let tableRows = '';
  if (prop.rnTags && item) {
    if (item.length) {
      item.forEach(tag => {
        const isMatch = tag.match(/{@platform [a-z]*}/);
        if (isMatch) {
          const platform = isMatch[0].match(/ [a-z]*/);
          tag = tag.replace(/{@platform [a-z]*}/g, '');
          const colorBlock =
            propName === 'color' && prop.rnTags.default && !tag.includes('null')
              ? '<ins style="background:' +
                tag.replace(/'/g, '') +
                '" class="color-box"></ins>'
              : '';
          tag = tag + colorBlock + formatPlatformName(platform[0].trim());
        }
        tableRows = tableRows + tag + '<hr/>';
      });
      tableRows = tableRows.replace(/<hr\/>$/, '');
    } else {
      tableRows = item.join('<hr/>');
    }
  } else {
    tableRows = prop.flowType ? maybeLinkifyType(prop.flowType) : '';
  }
  return tableRows;
}

// Wraps a string in an inline code block in a way that is safe to include in a
// table cell, by wrapping it as HTML <code> if necessary.
function stringToInlineCodeForTable(str) {
  let useHtml = /[`|]/.test(str);
  str = str.replace(/\n/g, ' ');
  if (useHtml) {
    return '<code>' + he.encode(str).replace(/\|/g, '&#124;') + '</code>';
  }
  return str;
}

function maybeLinkifyType(flowType) {
  let url, text;
  flowType.elements?.forEach(elem => {
    if (Object.hasOwnProperty.call(magic.linkableTypeAliases, elem.name)) {
      ({url, text} = magic.linkableTypeAliases[elem.name]);
    }
  });
  if (!text) {
    text = stringToInlineCodeForTable(
      flowType.raw || formatType(flowType.name)
    );
  }
  if (url) {
    return `[${text}](${url})`;
  }
  return text;
}

function formatType(name) {
  if (name.toLowerCase() === 'boolean') return 'bool';
  if (name.toLowerCase() === 'stringish') return 'string';
  if (name === '$ReadOnlyArray') return 'array';
  return name;
}

function maybeLinkifyTypeName(name) {
  let url, text;
  if (Object.hasOwnProperty.call(magic.linkableTypeAliases, name)) {
    ({url, text} = magic.linkableTypeAliases[name]);
  }
  if (!text) {
    text = stringToInlineCodeForTable(name);
  }
  if (url) {
    return `[${text}](${url})`;
  }
  return text;
}

module.exports = {
  formatPlatformName,
  formatMultiplePlatform,
  formatDefaultPlatformProp,
  formatMultipleRowProp,
  maybeLinkifyType,
  maybeLinkifyTypeName,
};
