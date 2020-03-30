const yargs = require('yargs').argv;

const geocode = require('./utils/geocode');
const darksky = require('./utils/darksky');

if (yargs.location) {
  geocode(yargs.location, (err, data) => {
    console.log('place name: ', data.location);
    darksky(data.lat, data.long, (err, darkskyData) => {
      if (err) {
        console.log('error', err);
      } else {
        console.log('darkskyData', darkskyData);
      }
    });
  });
} else {
  console.log('please enter a location');
}
