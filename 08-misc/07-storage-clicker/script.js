/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    var lastNumber = localStorage.getItem("counter");
    console.log(lastNumber);
    if (lastNumber == null) { lastNumber = 0; } else { document.getElementById("target").innerHTML = lastNumber; }


    document.getElementById("increment").onclick = () => {
        lastNumber++;
        document.getElementById("target").innerHTML = lastNumber;
        localStorage.setItem("counter", lastNumber);
    };

})();