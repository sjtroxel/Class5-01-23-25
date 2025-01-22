            // **** DOCUMENT OBJECT MODEL ("THE DOM") **** //

             // 01-23-25 Notes - Part 1 of 2


// ** SELECTING ELEMENTS: FINDING WHAT YOU NEED

// const button = document.querySelector('button');
// console.log(button);

// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//   console.log(button);
// });

// const header = document.getElementById('header');
// console.log(header);

// const items = document.getElementsByClassName('item');
// console.log(items);


// ---


// ** CHANGING CONTENT: UPDATING YOUR PAGE

// const button = document.querySelector('button');
// button.innerHTML = 'Click me!!';

// const header = document.querySelector('h1');
// header.textContent = 'Welcome to My Website!!';

// const image = document.querySelector('img');
// image.setAttribute('src', 'new-image.jpg');

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// console.log(link);


// ---


// ** STYLING: MAKING IT LOOK PRETTY
        // --> The .style. command in JS can access and modify any existing CSS property but the changes are INLINE STYLES that apply only to the SPECIFIC ELEMENT selected.

// const button = document.querySelector('button');
// button.style.backgroundColor = "blue";
// button.style.color = "white";

            // Below is me making up stuff to test on my own -

// const makePink = document.querySelector('.exercise, .push');

// makePink.classList.add('makePink');                             // --> I'm trying to change .button1 and .exercise to pink background.

 // --> I found out I can only add one element to the new class makePink I made here. It won't let me add .push (button) to makePink since I already put .exercise into the one and only js-.makepink class slot.

// const pink = document.querySelector(makePink);
// button.style.backgroundColor = "hotpink";
// button.style.color = "whitesmoke";              // --> For whatever reason I put button and it still changed the .exercise to pink.


// ---


// ** CREATING & REMOVING ELEMENTS: CHANGING THE PAGE STRUCTURE

            // createElement() is used to create new elements!
const newParagraph = document.createElement('p');
newParagraph.textContent = 'CONGRATULATIONS, you are the proud parent of a newborn happy and healthy baby child!';
document.body.appendChild(newParagraph);          // --> this adds (appends) the new element to the end of a parent (body in this case)

            // removeChild() is used to remove a child element from its parent 
                // What a sad and depressing JS command since it is tragic and awful if and when a child must be removed from their parent but it is known to happen. E.g. if the parent is unwell and cannot care for the child properly but hopefully one day they can be .reunifiedChild() again. 
                // OH WAIT perhaps removeChild() is a baby being born!! In this case it is a very happy JS command indeed! Yes perhaps.
                // I'll edit paragraph content above to reflect this second, happy narrative of course.
const parent = document.querySelector('.container');          
                // !! You'd be in big trouble if you called an expecting mother a baby-container LOL don't do it don't do it. !!
const child = document.querySelector('p');
parent.removeChild(child);              