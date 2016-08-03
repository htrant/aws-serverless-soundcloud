'use strict';

const rp = require('request-promise');
const scApi = process.env.SC_API_ENDPOINT;
const scClientId = process.env.SC_CLIENT_ID;


module.exports.handler = (event, context, cb) => {
  const options = {
    uri: `${scApi}/users/${event.user_id}/tracks`,
    qs: {
      client_id: scClientId
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };

  rp(options)
      .then(data => {
        const tracks = [];
        for (const item of data) {
          const track = {
            track_id: item.id,
            title: item.title,
            permalink_url: item.permalink_url,
            artwork_url: item.artwork_url
          };
          tracks.push(track);
        }
        cb(null, tracks);
      })
      .catch(exception => {
        cb(exception);
      });
};
