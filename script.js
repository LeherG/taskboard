const addCardButton = document.getElementById('addCardButton');
const cardHolder = document.getElementById('cardHolder');

function newCard() {
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute("draggable", "true");

    var nameSpot = document.createElement('h1');
    nameSpot.textContent = 'task brief';
    nameSpot.setAttribute("contenteditable", "true");

    var separator = document.createElement('hr');

    var descSpot = document.createElement('p');
    descSpot.textContent = "task description";
    descSpot.setAttribute("contenteditable", "true");

    card.appendChild(nameSpot);
    card.appendChild(separator);
    card.appendChild(descSpot);
    cardHolder.appendChild(card);

    document.getElementsByTagName('body')[0].appendChild(cardHolder);
};
