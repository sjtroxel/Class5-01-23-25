            // **** DOCUMENT OBJECT MODEL ("THE DOM") **** //
                // (Continued)

            // 01-23-25 Notes - Part 2 of 2

            // EVENT LISTENERS ETC.



// ** EVENT HANDLING: REACTING TO USER ACTIONS


// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//         alert('Button Clicked!!');
// });

// To remove, use               removeEventListener()


// ---


// ** EVENT LISTENER METHODS: REACTING TO USER ACTIONS


        // 1: CLICK

// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//         alert('Button clicked!');
// });
    

        // 2: MOUSEENTER   &   MOUSESAVE
                // When mouse pointer enters, or exits, an element (this is like "hover" in CSS).

// const button = document.querySelector('button');
// button.addEventListener('mouseenter', function() {
//         button.style.backgroundColor = 'blue';
// });
// button.addEventListener('mouseleave', function() {
//         button.style.backgroundColor = '';
// });


        // 3: KEYDOWN  &  KEYUP  &  (KEYPRESS (deprecated in favor of keydown))
                // Keydown is when a key is pressed down, keyup is fired when key is released.

// document.addEventListener('keydown', function(event) {
//         if (event.key === 'Enter') {
//                 document.querySelector('h1').textContent = 'ENTER KEY PRESSED!!';
//         }
// });


        // 4: SUBMIT     (By clicking a submit button, or by pressing "Enter" while focused on an input field.)

// const form = document.querySelector('form');
// form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         alert('Form submission prevented!');
// });


        // 5: FOCUS   &   BLUR     (Focus triggered when element gains focus, blur triggered when it loses focus.)

// const input = document.querySelector('input');
// input.addEventListener('focus', function() {
//         input.style.backgroundColor = 'lightyellow';
// });
// input.addEventListener('blur', function() {
//         input.style.backgroundColor = '';
// });
        
        
        // 6: CHANGE

// const select = document.querySelector('select');
// select.addEventListener('change', function() {
//         alert('You selected a NEW option?!!');
// });


        // 7: DBLCLICK

const paragraph = document.querySelector('.dontclick');
paragraph.addEventListener('dblclick', function() {
        paragraph.textContent = "YOU'RE IN BIG TROUBLE NOW!!";
        paragraph.style.backgroundColor = 'black';
        paragraph.style.color = 'yellow';
});


        // 8: RESIZE            (Good for responsive web design...)

// window.addEventListener('resize', function() {
//         console.log(`New window size: ${window.innerWidth}x${window.innerHeight}`);
// });
 

        // 9: SCROLL            (OH - for Day 2 exercises could add?)
                // Can be used to trigger animations or load content dynamically.

// window.addEventListener('scroll', function() {
//         if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
//         alert('You have reached the bottom of the page!');
//         }
// });


        // 10: DRAG   &   DROP

// const dropZone = document.querySelector('.drop-zone');
// dropZone.addEventListener('dragover', function(event) {
//   event.preventDefault();               // Required to allow dropping
// });
// dropZone.addEventListener('drop', function(event) {
//   event.preventDefault();
//   alert('Item dropped!');
// });


        // 11: INPUT

// const textarea = document.querySelector('textarea');
// const counter = document.querySelector('.counter');

// textarea.addEventListener('input', function() {
//         counter.textContent = `Character count: ${textarea.value.length}`;
// });


        // 12: CONTEXTMENU
                // This is triggered when user right-clicks on an element to bring up a context menu.

// document.addEventListener('contextmenu', function(event) {
//         event.preventDefault();
//         alert('Right-click is disabled on this page.');
// });


        // 13: ANIMATIONEND   &   TRANSITIONEND
                // These events are fired when CSS animations or transitions end (so as to trigger actions thereafter).

// const box = document.querySelector('.box');
// box.addEventListener('animationend', function() {
//         console.log('The animation has ended!!');
// });