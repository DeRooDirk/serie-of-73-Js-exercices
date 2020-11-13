// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// Select the body 
let random = document.querySelector("body");
// function colorchange
function randomColor() {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    random.style.background = color;

    // your code here
}