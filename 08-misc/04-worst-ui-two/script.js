/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var theTarget = document.getElementById("target");
    let setButtons = document.querySelector('.actions');

    setButtons.addEventListener('click', e => {
        let minData = parseInt(e.target.getAttribute("data-min"));
        let maxData = parseInt(e.target.getAttribute("data-max"));
        var currentNumber = parseInt(e.target.innerText);
        var newNumber = 0;
        var newDial = "";

        if (currentNumber == maxData) { newNumber = minData; } else { newNumber = currentNumber + 1; }

        if (e.target.id == "part-one") { newDial = newNumber.toString().padStart(4, "0"); } else { newDial = newNumber.toString().padStart(2, "0"); }

        switch (e.target.id) {
            case "part-one":
                e.target.textContent = newDial.substr(1);
                theTarget.innerText = newDial + theTarget.innerText.substring(4);
                break;
            case "part-two":
                e.target.textContent = newDial;
                theTarget.innerText = theTarget.innerText.substring(0, 4) + newDial + theTarget.innerText.substring(6);
                break;
            case "part-three":
                e.target.textContent = newDial;
                theTarget.innerText = theTarget.innerText.substring(0, 6) + newDial + theTarget.innerText.substring(8);
                break;
            case "part-four":
                e.target.textContent = newDial;
                theTarget.innerText = theTarget.innerText.substring(0, 8) + newDial + theTarget.innerText.substring(10);
                break;
            default:
                break;
        }

    });




})();