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

function formatMethodType(methodName, param) {
  // console.log(methodName);
  if (param.type.name) return param.type.name;
  else return 'Missing';
}

module.exports = {
  formatMethodType,
};
