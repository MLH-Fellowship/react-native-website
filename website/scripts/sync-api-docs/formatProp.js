/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const {typeOf} = require('tokenize-comment/lib/utils');

function formatPlatformName(platform) {
  switch (platform.toLowerCase()) {
    case 'ios':
      return '<div class="label ios">' + 'iOS' + '</div>';
    case 'android':
      return '<div class="label android">' + 'Android' + '</div>';
  }
  return platform;
}

function formatDefaultPlatformProp(defaultProps) {
  // console.log("formatDefaultPlatformProp -> defaultProps",defaultProps)

  const platformDefaultProps = JSON.parse(defaultProps);
  console.log(
    'formatDefaultPlatformProp -> platformDefaultProps',
    platformDefaultProps
  );
}

module.exports = {
  formatPlatformName,
  formatDefaultPlatformProp,
};
