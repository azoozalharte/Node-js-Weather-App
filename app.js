const request = require('request');

const url =
  'https://api.darksky.net/forecast/f25ba583af3cc25e491d0ee14b206a4a/37.8267,-122.4233';

request({ url: url, json: true }, (err, res) => {
  // console.log(res.body.timezone);
  console.log(
    `it's currently ${res.body.currently.temperature} degrees out. there is a ${res.body.currently.precipProbability}% to rain in ${res.body.timezone}`
  );
});
