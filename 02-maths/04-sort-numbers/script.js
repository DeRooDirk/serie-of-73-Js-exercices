/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here

    });

})();
*/

(function() {
    document.getElementById("run").addEventListener("click", function() {
        //The .map function in this case goes over every element (represented by the x and converts it to an integer).     
        var numbers = document.getElementById("numbers").value.split(', ').map(x => +x);
        // we need to add a function by parameter that sorts numerically.
        numbers = numbers.sort(function(a, b) { return a - b });
        alert("Sorted numbers:" + numbers.toString());
    });
})();