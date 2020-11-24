/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let passwoord = document.getElementById("pass-one");


    //Listening to keypresses 
    passwoord.onkeypress = () => {
        let size = document.getElementById("pass-one").value.length;
        // or use (size >9)
        if (size >= 10) {
            return false;
        }
    };
    //looking for input
    passwoord.oninput = () => {
        let size = document.getElementById("pass-one").value.length;
        document.getElementById("counter").innerHTML = size + "/10";
    };

})();