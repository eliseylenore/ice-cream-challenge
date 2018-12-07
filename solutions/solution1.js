var list = document.getElementsByClassName('ice-cream-list')[0];

window.iceCreamFlavors.forEach(
    function (flavor) {
        list.innerHTML += '<li class="ice-cream-flavor">' + flavor + '</li>';
    }
)

