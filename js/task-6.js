window.onload = () => {

  const controls = document.querySelector('#controls');
  const input = document.querySelector('#number');
  const buttonDestroy = document.querySelector('[data-destroy]');
  const buttonCreate = document.querySelector('[data-create]');
  const boxContainer = document.querySelector('#boxes');



  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  function createBoxes(amount) {
    boxContainer.innerHTML = "";

    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxContainer.appendChild(box);
      boxSize += 10;
    }
  }

  function destroyBoxes() {
    boxContainer.innerHTML = "";
  }

  buttonCreate.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
    }
    input.value = "";
  });

  buttonDestroy.addEventListener('click', destroyBoxes);
};

