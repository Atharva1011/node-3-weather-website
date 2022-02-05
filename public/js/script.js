const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const pointOne = document.querySelector("#current_temp");
const pointTwo = document.querySelector("#feels_like_temp");
const pointThree = document.querySelector("#condition");
const pointFour = document.querySelector("#pressure");
const pointFive = document.querySelector("#humidity");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  pointOne.textContent = "";
  pointTwo.textContent = "";
  pointThree.textContent = "";
  pointFour.textContent = "";
  pointFive.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        pointOne.textContent =
          "The current temperatture is " + data.forecast.current_temp;
        pointTwo.textContent =
          "But the temperature feels like " + data.forecast.feels_like_temp;
        pointThree.textContent =
          "The condition outside is: " + data.forecast.condition;
        pointFour.textContent =
          "The current pressure is: " + data.forecast.pressure;
        pointFive.textContent =
          "The current humidity is: " + data.forecast.humidity;
      }
    });
  });
});
