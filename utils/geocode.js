const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYXpvb3phbGhhcnRlIiwiYSI6ImNrNzZvbGY1dDAwMWszbm1mbXhvanp4cW0ifQ.iBQ0yrnUBA0MC0YO01aL7g&limit=1`;

  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback('Unable to connect to location service', undefined);
    } else if (res.body.features === 0) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        lat: res.body.features[0].center[1],
        long: res.body.features[0].center[0],
        location: res.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
