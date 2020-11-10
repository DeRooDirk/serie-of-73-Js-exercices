/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*
(function () {

    document.getElementById("run").addEventListener("click", function () {

        // your code here

    });

})();
*/

function square()
{
var numOne = 21;
var msg="";
var result= "0";
 
for( x= 1; x<=numOne; x++)
{
result = x * x;
msg = msg  + x + " * "+ x + " = " + result + "\n";
}
 
alert(msg);
} 