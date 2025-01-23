    
    // In-Class Lecture Notes (Thursday 01/23/25)


// -----


// console.log(5 + 5);

// const person = {
//     name: "Steffan Troxel",
//     age: 30,
//     greet: function() {
//         console.log(`Hello ${this.name}!`);

//     }
// }

// // DOT NOTATION
// console.log(person.name);
// // BRACKET NOTATION
// console.log(person['name']);

// // --> const --> can't change "person" but you can change the "keys" within it 

// person.name = "Millisa"

// console.log(person.name);       // --> changed to "Millisa"

// person.greet();

// person.greet = function(name) {
//     console.log(`Hello, ${name}!`);
// }

// person.greet("Steffan")

// person.greet();


// -----


// const el = document.querySelector("#my-div");

// console.log(el);

    // --> or

const el = document.querySelector('#my-unordered-list');
const btn = document.querySelector('#btn');

btn.addEventListener('click', btnHandler)

// function btnHandler () {
//     el.textContent = "Hello universal";
//     el.style.color = 'blue'
// }

console.log(el);

function btnHandler () {

    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>`
    el.appendChild(listItem);
}





