'use strict';

module.exports.handler = (event, context, cb) => {
  console.log(JSON.stringify(event, null, 2));
  return cb(null, event);
};
