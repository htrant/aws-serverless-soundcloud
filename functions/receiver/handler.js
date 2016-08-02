'use strict';

const rp = require('request-promise');

const scApi = process.env.SC_API_ENDPOINT;
const scClientId = process.env.SC_CLIENT_ID;


module.exports.handler = (event, context, cb) => {
  const options = {
    uri: `${scApi}/users/${event.user_id}/tracks?client_id=${scClientId}`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  rp(options)
      .then(response => {
        cb(null, response);
      })
      .catch(exception => {
        cb(exception);
      });
};
