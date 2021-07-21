var addToDoButton = document.getElementById('addTodo');
var inputText = document.getElementById('inputField');
var addedElement = document.getElementById('toDoContainer');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('para-style');
    paragraph.innerText = inputText.value;
    addedElement.appendChild(paragraph);

    inputText.value=""
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration="line-through"
    })

    paragraph.addEventListener('dblclick', function(){
        addedElement.removeChild(paragraph);
    })

})
