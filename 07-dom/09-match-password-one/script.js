/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //Getting the first color of the  field
    let firstColor = document.getElementById("pass-one").style.borderColor;
    //run tru both
    document.getElementById("run").onclick = () => {

        let paswordOne = document.getElementById("pass-one");
        let paswordTwo = document.getElementById("pass-two");
        //Equals and same 
        if (paswordOne.value === paswordTwo.value) {

            paswordOne.style.borderColor = firstColor;
            paswordTwo.style.borderColor = firstColor;
        } else {
            paswordOne.style.borderColor = "red";
            paswordTwo.style.borderColor = "red";
        }

    };

})();