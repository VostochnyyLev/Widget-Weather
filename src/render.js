export default function render(data) {
  document.getElementById('wrapper').innerHTML = `
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
