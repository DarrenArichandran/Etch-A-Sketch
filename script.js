const container = document.getElementById('container');

const docFrag = document.createDocumentFragment();
const gridNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

gridNumber.forEach((grid) => {
    const div = document.createElement('div')
    div.textContent = grid;
    div.setAttribute('id', 'grid');
    docFrag.appendChild(div);
});
container.appendChild(docFrag);



