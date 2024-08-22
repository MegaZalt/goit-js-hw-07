const categories = document.querySelector('#categories');

const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`)

items.forEach(item => {
    const categorName = item.querySelector('h2').textContent;
    console.log(`Categories ${categorName}`);

    const elementsCount = item.querySelectorAll('li').length;
    console.log(`Elements: ${elementsCount}`);
});

