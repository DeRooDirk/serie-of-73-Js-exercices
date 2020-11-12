/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function() {

        let apple = fruits.find(fruit => { return fruit === "apple"; });
        if (apple === "apple") {
            console.log("Found  an Apple..!!");
        } else {
            console.log(" NOT found an Apple..!! ");
        }
    });

})();