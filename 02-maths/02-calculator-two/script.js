/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    var performOperation = operation => {
        // perform the operation
        switch (operation) {
        case 'addition' :
            var x = Number(document.getElementById("op-one").value);
            var y = Number(document.getElementById("op-two").value);
            var sum = x + y;
            alert(sum);
            break;
        case 'substraction' :
            var a = Number(document.getElementById("op-one").value);
            var b = Number(document.getElementById("op-two").value);
            var deduct = a - b;
            alert(deduct);
            break;
        case 'multiplication' :
            var c = Number(document.getElementById("op-one").value);
            var d = Number(document.getElementById("op-two").value);
            var multi = c * d;
            alert(multi);
            break;
        case 'division' :
            var e = Number(document.getElementById("op-one").value);
            var f = Number(document.getElementById("op-two").value);
            var divis = e / f;
            alert(divis);
            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();


