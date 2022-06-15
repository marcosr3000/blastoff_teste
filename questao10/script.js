function myTaste () {
    let chocolateIceCream = document.getElementById("flavors").value;
    if (chocolateIceCream === 'Chocolate') {
        alert('Amo sorvete de chocolate')
    } else if (chocolateIceCream === 'Selecione...') {
        return
    } else {
        alert('Prefiro outros sabores')
    }
}