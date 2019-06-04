const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const body = document.querySelector('body');
const output = document.getElementById('output');
const copy = document.getElementById('copy');

color1.addEventListener('input', setColor);
color2.addEventListener('input', setColor);
copy.addEventListener('click', copyToClipboard);

function setColor() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

  output.value = `${body.style.background};`;
}

function copyToClipboard() {
  output.select();
  document.execCommand("copy");
}

feather.replace();