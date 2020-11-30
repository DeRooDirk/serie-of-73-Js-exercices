/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*
var age = prompt("Please enter your age ");
var gender = prompt("Please enter your gender ");
var homeTown = prompt("Please enter your Hometown");
var result = confirm("you are " + age +" years old " + gender + " and from the town "+ homeTown );
*/

function questions() {
    var age = prompt("Please enter your age ");
    var gender = prompt("Please enter your gender ");
    var homeTown = prompt("Please enter your Hometown");
    var result = confirm("you are " + age + " years old " + gender + " and from the town " + homeTown);
    if (result == true) {
        console.log("welcome");
        return true;
    } else {
        questions();
    }
}
questions();