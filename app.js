// const { response } = require("express");
const express = require("express");
const app = express();
const https = require("https");

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=d3c30d5bbdee3b395bab9de6f880b297&units=metric";
  https.get(url, (response) => {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      res.send(
        `The weather in Seattle is ${temp} and ${weatherDescription} right now`
      );
    });
  });
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
