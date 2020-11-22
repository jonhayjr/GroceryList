const form = document.querySelector('form');
const list = document.querySelector('ul');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const quantityInput = form.elements.quantity;
    const productInput = form.elements.product;
    const newListItem = document.createElement('li');
    newListItem.append(`${quantityInput.value} - ${productInput.value}`);
    newListItem.setAttribute('id', productInput.value);
    list.append(newListItem);
    productInput.value = '';
    quantityInput.value = '';
})

document.getElementById("parent-list").addEventListener("click", function(e) {
    // e.target is our targetted element.
                // try doing console.log(e.target.nodeName), it will result LI
    if(e.target && e.target.nodeName == "LI") {
        //console.log(e.target.id + " was clicked");
        document.getElementById(e.target.id).style.textDecoration = 'line-through';
        document.getElementById(e.target.id).style.color = 'red';
    }
});