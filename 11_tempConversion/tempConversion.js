const convertToCelsius = function(temp) {
  celsius = (temp - 32) * (5/9);
  roundedCelsius = Math.round(celsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp * (9/5) + 32);
  roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
