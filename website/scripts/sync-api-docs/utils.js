/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Adds multiple platform tags for prop name
function formatMultiplePlatform(platforms) {
  let platformString = '';
  platforms.forEach(platform => {
    switch (platform.trim().toLowerCase()) {
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

module.exports = {
  formatMultiplePlatform,
};
