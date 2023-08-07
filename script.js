function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  const img = document.querySelector('#profile img');

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.jpeg');
    img.setAttribute('alt', 'lucas mexendo no celular com a camisa azul');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'lucas sorrindo de terno e gravata vermelha');
  }
}