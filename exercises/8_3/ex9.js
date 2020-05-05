const assert = require('assert');

function change(param) {
  return !param;
}

assert.ok(change(true)===false, 'Change true must be false');