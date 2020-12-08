/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var user = prompt("please enter your name ");
var answer = prompt("Hello " + user + " ! , Do you want to make some cake ? , yes or no ?  ");
if (answer == "yes", "y") {
    alert("Congrats with your decision !!");
} else {
    alert("Go buy me a cake then !!!");
}