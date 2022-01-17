fetch(
  "http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no"
)
  .then((response) => response.json())
  .then((data) => render(data));

function render(data) {
  document.getElementById("wrapper").innerHTML = `
  <div> Country: ${data.location.country}; </div>
    <div> City: ${data.location.name}; </div>
    <div>Time:${data.location.localtime}; </div>
    <div>Temperature: ${data.current.temp_c};</div>
    <div>${data.current.condition.text};</div>
    <div>
      <img src=${data.current.condition.icon} alt="">

    </div>
    `;
}
