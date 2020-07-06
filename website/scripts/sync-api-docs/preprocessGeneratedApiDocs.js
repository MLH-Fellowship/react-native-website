/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Preprocess the react-docgen artifact before rendering it to Markdown.
// This file may end up in the React Native repo, as part of the
// `generate-api-docs` script.

const tokenizeComment = require('tokenize-comment');

function joinDescriptionAndExamples(tokenized) {
  let sections = [];
  if (tokenized.description) {
    sections.push(tokenized.description);
  }
  for (const {raw} of tokenized.examples) {
    sections.push(raw);
  }
  if (tokenized.footer) {
    sections.push(tokenized.footer);
  }
  return sections.join('\n\n');
}

function preprocessTagsInDescription(obj) {
  if (obj && obj.description) {
    obj.description = obj.description.split('    ').join('');
    // console.log("preprocessTagsInDescription -> obj.description", obj.description)
    const descriptionTokenized = tokenizeComment(obj.description);
    // console.log("preprocessTagsInDescription -> obj.description", descriptionTokenized)
    obj.description = joinDescriptionAndExamples(descriptionTokenized);
    obj.rnTags = {};
    const platformTag = descriptionTokenized.tags.find(
      ({key}) => key === 'platform'
    );
    const defaultTag = descriptionTokenized.tags.find(
      ({key}) => key === 'default'
    );

    let typeTag = descriptionTokenized.tags.filter(tag => {
      return tag.key === 'type';
    });
    // let typeTag = descriptionTokenized.tags.find(
    //   ({key}) => key === 'type'
    // );
    // console.log("preprocessTagsInDescription -> typeTag", typeTag)

    if (platformTag) {
      obj.rnTags.platform = platformTag.value;
    }
    if (defaultTag) {
      obj.rnTags.default = defaultTag.value;
    }
    if (typeTag.length) {
      obj.rnTags.type = [];
      typeTag.forEach(tag => {
        obj.rnTags.type.push(tag.value);
      });
    }
  }
}

// NOTE: This function mutates `docs`.
function preprocessGeneratedApiDocs(docs) {
  for (const {component} of docs) {
    if (component.props) {
      for (const prop of Object.values(component.props)) {
        preprocessTagsInDescription(prop);
      }
      for (const prop of component.methods) {
        preprocessTagsInDescription(prop);
      }
    }
  }
}

module.exports = preprocessGeneratedApiDocs;
