const render = ({ location: { name, country, localtime }, current: { temp_c, condition: { icon, text } } }) => {
  document.getElementById('wrapper').insertAdjacentHTML(
    'beforeend',
    `
  <div> Country: ${country}; </div>
    <div> City: ${name}; </div>
    <div>Time:${localtime}; </div>
    <div>Temperature: ${temp_c};</div>
    <div>${text};</div>
    <div>
      <img src=${icon} alt="">
    </div>
    `,
  );
};

export default render;
