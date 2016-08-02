'use strict';

const apiEndpoint = process.env.SC_API_ENDPOINT;


module.exports.handler = (event, context, cb) => {
  const tracks = [];
  for (const item of event) {
    const track = {
      track_id: item.id,
      title: item.title,
      permalink_url: item.permalink_url,
      artwork_url: item.artwork_url
    };
    tracks.push(track);
  }
  cb(null, tracks);
};
