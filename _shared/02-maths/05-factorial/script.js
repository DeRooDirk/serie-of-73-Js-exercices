/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*
(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here

    });

})();

*/
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num = num * i;
    }
    return num;
}

(function () {   

    document.getElementById("run").addEventListener("click", function() {        
        var number = Number(document.getElementById("number").value);
        if(number !== undefined)
        {
            var factorialNr = (factorialize(number));
            alert ("The factorial is: "+ factorialNr);
        }
    });

})();
