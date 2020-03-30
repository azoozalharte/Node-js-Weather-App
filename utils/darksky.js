const request = require('request');

const darksky = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/f25ba583af3cc25e491d0ee14b206a4a/${lat},${long}?units=si`;

  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback('unable to connect to weather service', undefined);
    } else if (res.body.error) {
      callback('The given location is invalid.', undefined);
    } else {
      callback(undefined, `${res.body.daily.data[0].summary} `);
    }
  });
};

module.exports = darksky;
