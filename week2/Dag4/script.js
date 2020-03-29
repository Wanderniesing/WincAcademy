// deel 1
const buttons = document.getElementsByClassName('big-five-button');
const listNew = document.getElementById('spotted-animals-list');
const button = document.getElementById('remove-first-item-button');

// arr.textContent = "i was here "

// document.querySelector('body').appendChild(arr)

document.querySelector('button').addEventListener('click', () => {
  console.log('YES');
});

Array.from(buttons).forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    var clickedButton = e.target.innerText;
    console.log(clickedButton);
    addAnimal(clickedButton);

    clickedButton.addAnimal = 'lion';
  });
});

// , 'Leopard', 'Elephant', 'Rhino', 'Buffalo';
// console.log(clickedButton);

// const list = getElementsById("spotted-animals-list")
const addAnimal = document.createElement('li');
addAnimal.appendChild(listNew);
console.log(addAnimale);

// var parent1 = document.getElementById('parent1');
// var parent2 = document.getElementById('parent2');
// var parent3 = document.getElementById('parent3');

// function clear1() {
//     console.time("innnertHTML");
//     parent1.innerHTML = "";
//     console.timeEnd("innnertHTML");
// }

// function clear2() {
//     console.time("firstchild");
//     while (parent2.firstChild) {
//         parent2.removeChild(parent2.firstChild);
//     }
//     console.timeEnd("firstchild")
// }

// function clear3() {
//     console.time("node.remove");
//     parent3.querySelectorAll('*').forEach(n => n.remove());
//     console.timeEnd("node.remove");
// }
// const inputButton = document.getElementById("button"),
//     items = document.querySelectorAll ("# list li"),
//     tab = [], index;

//     for (var i = 0; i < items.length; i++) {
//          tab.push(items[i].innerHTml);
//     }

// const addAnimals = ["lion", "Leopard", "Elephant", "Rhino", "Buffalo"];

// var myDiv = document.getElementById("spotted-animals-list-item-first-item-button");

// for (var i = 1; i < addAnimals.length; i++) {
//     var checkBox = document.createElement("input");
//     var label = document.createElement("label");
//     checkBox.type = "button";
//     checkBox.value = addAnimals[i];
//     myDiv.appendChild(buttons);
//     myDiv.appendChild(ListeningStateChangedEvent);
//     myDiv.appendChild(document.createTextNode(addAnimals[i]));
// }
