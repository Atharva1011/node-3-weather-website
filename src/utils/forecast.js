const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=dd8e631a48444e3bc550f3b474e4a8a2&query=" +
    lat +
    "," +
    long;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the weather services!", undefined);
    } else if (body.error) {
      callback("No weather data for the given location", undefined);
    } else {
      const current = body.current;
      const current_temp = current.temperature;
      const feels_like_temp = current.feelslike;
      const condition = current.weather_descriptions[0];
      callback(
        undefined,
        condition +
          " It is currently " +
          current_temp +
          " degrees. But it feels like " +
          feels_like_temp +
          " degrees"
      );
    }
  });
};

module.exports = forecast;
