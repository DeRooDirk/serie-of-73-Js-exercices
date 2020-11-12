/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    document.getElementById("run").onclick = () => {

        let randNumbers = [];
        //Genereting Random numbers
        for (i = 0; i < 10; i++) {
            randNumbers[i] = Math.floor(Math.random() * (101));
        }

        //Getting the min number of the array
        let minNumber = randNumbers.reduce((a, b) => Math.min(a, b));
        //Getting the Max number of the array
        let maxNumber = randNumbers.reduce((a, b) => Math.max(a, b));
        //sum
        let totNumbers = randNumbers.reduce((acum, number) => {
            return acum += number;
        }, 0);

        //Printing  the Table
        randNumbers.forEach((singleNumber, index) => {
            document.getElementById(`n-${index + 1}`).innerHTML = singleNumber;
        });

        //Printing the list
        document.getElementById("min").innerHTML = minNumber;
        document.getElementById("max").innerHTML = maxNumber;
        document.getElementById("sum").innerHTML = totNumbers;
        document.getElementById("average").innerHTML = totNumbers / 10;
    };

})();