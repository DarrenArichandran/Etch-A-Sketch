
document.querySelector('#button').addEventListener('click', promptMe)

function promptMe () {
    const userInput = prompt("How many squares in your grid?");
    if (userInput != null && userInput <= 100) {
         squares = userInput
    } else {
        alert ('TOO MUCH, try a lower number of squares')
    }
const container = document.getElementById('container');

const docFrag = document.createDocumentFragment();
const gridNumber = [];
    for (var i = 1; i <= Math.pow(squares,2); i++) {
       gridNumber.push(i);
    }
    

gridNumber.forEach((grid) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'grid');
    docFrag.appendChild(div);
});

container.appendChild(docFrag);
}


