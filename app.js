const request = require('request');

const url =
  'https://api.darksky.net/forecast/f25ba583af3cc25e491d0ee14b206a4a/37.8267,-122.4233?units=si';

request({ url: url, json: true }, (err, res) => {
  console.log(res.body.timezone);
  console.log(
    `${res.body.daily.data[0].summary} it's currently ${res.body.currently.temperature} degrees out. there is a ${res.body.currently.precipProbability}% to rain in ${res.body.timezone}`
  );
});

const url1 =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXpvb3phbGhhcnRlIiwiYSI6ImNrNzZvbGY1dDAwMWszbm1mbXhvanp4cW0ifQ.iBQ0yrnUBA0MC0YO01aL7g&limit=1';

request({ url: url1, json: true }, (err, res) => {
  console.log(
    `lat ${res.body.features[0].center[1]}, long ${res.body.features[0].center[0]}`
  );
});
