
    
document.querySelector('#button').addEventListener('click', () => {

const container = document.getElementById('container');
const docFrag = document.createDocumentFragment();
let userInput = prompt("How many squares in your grid?");
let gridNumber = [];


    if (userInput != null && userInput <= 100) {

    for (let i = 1; i <= Math.pow(userInput,2); i++) {
            gridNumber.push(i);
        }
            gridNumber.forEach(() => {
                let div = document.createElement('div');
                div.setAttribute('id','grid');
                div.style.width = `calc(500px/${userInput})`;
                div.style.height = `calc(500px/${userInput})`;

                docFrag.appendChild(div);
            })
                container.replaceChildren(docFrag);
    } else {
        alert('Try again')
    }
});