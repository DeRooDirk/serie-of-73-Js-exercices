/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// your code here
function zoo() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", function() {
        //i is de teller , i kleiner als aantal fruits(array) , teller +1
        for (i = 0; i < fruits.length; i++) {
            //console logs the fruit at that count 
            console.log(fruits[i]);
        }
    });
}
zoo();