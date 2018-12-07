var list = document.getElementsByClassName('ice-cream-list')[0];

function createNewLi(flavor) {
    var newLi = document.createElement('li');
    var textNode = document.createTextNode(flavor);
    newLi.classList.add('ice-cream-flavor');
    newLi.appendChild(textNode);
    list.append(newLi);
}

for (var i = 0; i < window.iceCreamFlavors.length; i++) {
    createNewLi(window.iceCreamFlavors[i])
}
