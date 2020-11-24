/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").oninput = () => {
        let myNumb = document.getElementById("pass-one").value;
        //javaScript RegExp \d Metacharacter  W3shools looks for  digits
        let regExp = /\d/g;
        //creating a let to store the digits in  found by regExp
        let searchNumbers;


        if (myNumb.length >= 8) {
            searchNumbers = myNumb.match(regExp);
            if (searchNumbers !== null) {
                spagettiNumbers = searchNumbers.length;
            } else {
                spagettiNumbers = 0;
            }

            if (spagettiNumbers >= 2) {
                document.getElementById("validity").innerHTML = "ok";
            } else {
                document.getElementById("validity").innerHTML = "Not ok";
            }
        } else {
            document.getElementById("validity").innerHTML = "Not ok";
        }
    };

})();