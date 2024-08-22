window.onload = () => {

  const input = document.querySelector('#number');
  const buttonDestroy = document.querySelector('#destroy-button');
  const buttonCreate = document.querySelector('#create-button');
  const boxContainer = document.querySelector('#boxes');

  

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
}
