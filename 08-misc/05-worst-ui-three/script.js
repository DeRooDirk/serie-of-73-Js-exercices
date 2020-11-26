/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var theTarget = document.getElementById("target");
    let setButtons = document.querySelector('.material');

    setButtons.addEventListener('click', e => {
        if (e.target.type == "button") {
            let dataMin = parseInt(document.getElementById(e.target.id.substring(4)).getAttribute("data-min"));
            let dataMax = parseInt(document.getElementById(e.target.id.substring(4)).getAttribute("data-max"));
            let newNumber = Math.round(Math.random() * (dataMax - dataMin) + dataMin);
            let newDial = "";

            if (e.target.id == "fix-part-one") { newDial = newNumber.toString().padStart(4, "0"); } else { newDial = newNumber.toString().padStart(2, "0"); }

            switch (e.target.id) {
                case "fix-part-one":
                    document.getElementById(e.target.id.substring(4)).value = newDial.substr(1);
                    theTarget.innerText = newDial + theTarget.innerText.substring(4);
                    break;
                case "fix-part-two":
                    document.getElementById(e.target.id.substring(4)).value = newDial;
                    theTarget.innerText = theTarget.innerText.substring(0, 4) + newDial + theTarget.innerText.substring(6);
                    break;
                case "fix-part-three":
                    document.getElementById(e.target.id.substring(4)).value = newDial;
                    theTarget.innerText = theTarget.innerText.substring(0, 6) + newDial + theTarget.innerText.substring(8);
                    break;
                case "fix-part-four":
                    document.getElementById(e.target.id.substring(4)).value = newDial;
                    theTarget.innerText = theTarget.innerText.substring(0, 8) + newDial + theTarget.innerText.substring(10);
                    break;

                default:
                    break;
            }
        }

    });


})();