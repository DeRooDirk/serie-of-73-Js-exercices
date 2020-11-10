/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*
function calculator() {    

    // to get the value of an input: document.getElementById("element-id").value
     let valOne =document.getElementById("op-one").value;     
     let valTwo = document.getElementById("op-two").value;
    
          
    
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(valOne+valTwo) 
        
    });
    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
    });
};
*/

function optellen() {
    var valOne = Number(document.getElementById("op-one").value);
    var valTwo = Number(document.getElementById("op-two").value);
    var sum = valOne + valTwo;
    document.getElementById("result").innerHTML = sum;
};

function substract() {
    var valOne = Number(document.getElementById("op-one").value);
    var valTwo = Number(document.getElementById("op-two").value);
    var dif = valOne - valTwo;
    // alert(dif);
    document.getElementById("result").innerHTML = dif;
};

function multi() {
    var valOne = Number(document.getElementById("op-one").value);
    var valTwo = Number(document.getElementById("op-two").value);
    var product = valOne * valTwo;
    document.getElementById("result").innerHTML = product;
};

function divide() {
    var valOne = Number(document.getElementById("op-one").value);
    var valTwo = Number(document.getElementById("op-two").value);
    var remainder = valOne / valTwo;
    document.getElementById("result").innerHTML = remainder;
};