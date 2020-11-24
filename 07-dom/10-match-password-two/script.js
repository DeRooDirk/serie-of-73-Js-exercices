/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //Getting the original Class
    let originalClass = document.getElementById("pass-one").className;

    document.getElementById("run").onclick = () => {

        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");

        if (passOne.value === passTwo.value) {
            //Equals&same
            passOne.className = originalClass;
            passTwo.className = originalClass;
        } else {
            passOne.className = "error";
            passTwo.className = "error";


        }

    };

})();