/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var hiddenNumber = Math.round(Math.random() * (100 - 1) + 1);
    var guessNumber = 3; //tries  (Y)
    var tries = 1;
    var right = false;

    alert("Welcome gambler, this is a fun game \nInstructions : \nTry to guess the secret number!!");
    alert("Hidden Number: " + hiddenNumber);
    while (!right) {
        alert(`This is your attempt #${tries}, go for it!! `);
        let answer = prompt("Guessss !!, take your best shot..");

        if (isNaN(answer)) {
            alert("Your shoot is not a number!");
            tries++;
        } else {
            if (Number(answer) == hiddenNumber) {
                right = true;
                document.getElementById("result").innerHTML = "<strong> Good guess!!, my number was indeed  " + hiddenNumber + " You needed " + tries + " guesses </strong > ";
            } else if (Number(answer) < hiddenNumber) {
                alert("Nice try.. the hidden number is HIGHER");
                tries++;
            } else {
                alert("Nice try.. the hidden number is LOWER");
                tries++;
            }
        }
        if (guessNumber == (tries - 1)) {
            alert("That was your last gamble.. Bye");
            right = true;
        }
    }

})();