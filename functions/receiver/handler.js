'use strict';

const rp = require('request-promise');
const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({
  region: process.env.SERVERLESS_REGION
});
const scApi = process.env.SC_API_ENDPOINT;
const scClientId = process.env.SC_CLIENT_ID;


module.exports.handler = (event, context, cb) => {
  const options = {
    uri: `${scApi}/resolve`,
    qs: {
      client_id: scClientId,
      url: event.url
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };

  rp(options)
      .then(response => {
        const params = {
          FunctionName: `${process.env.SERVERLESS_PROJECT}-get-tracks`,
          Payload: JSON.stringify(response, null, 2)
        };
        return lambda.invoke(params).promise();
      })
      .then(response => {
        cb(null, JSON.parse(response.Payload));
      })
      .catch(exception => {
        cb(exception);
      });
};
