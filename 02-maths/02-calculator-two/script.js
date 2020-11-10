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
        var x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById("op-two").value);
        // perform the operation
        switch (operation) {
            case 'addition':
                var sum = x + y;
                alert(sum);
                break;
            case 'substraction':
                var deduct = x - y;
                alert(deduct);
                break;
            case 'multiplication':
                var multi = x * y;
                alert(multi);
                break;
            case 'division':
                var divis = x / y;
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