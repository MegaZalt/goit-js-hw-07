const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', function () {
    const trimedName = this.value.trim();
    nameOutput.textContent = trimedName || 'Anonymous';
});

});