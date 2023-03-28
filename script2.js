$(document).ready(() => {
  const body = $('body');
  const btn = $('#btn');

  const handleClick = () => {
    // body.innerHTML = '<h1> Clicou no botao </h1>';
    // body.style.backgroundColor = 'blue';
    // body.style.color = 'white';
    body.html(`
      <h1> Clicou no botao </h1> 
      <h2> parabensss </h2>
    `);
    body.css('background-color', 'blue');
    body.css('color', 'white');
  };

  btn.mouseover(() => {
    // btn.style.position = 'absolute';
    // btn.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`;
    // btn.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`;
    btn.css('position', 'absolute');
    btn.css('top', `${Math.floor(Math.random() * (window.innerHeight - 18))}px`);
    btn.css('left', `${Math.floor(Math.random() * (window.innerWidth - 36))}px`);

  });

  btn.on('click', handleClick);

});





