/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var text = "Life is like a camera.Just focus on what’ s important,capture the good times, develop from the negatives, and if things don’ t work out, just take another shot.";

    var textArray = text.split('');
    var target = document.getElementById("target");
    var spansArray = [];
    var originalSize = 16;

    target.innerHTML = "";
    target.style.fontSize = originalSize;


    //Inserting span's array into the Target
    textArray.forEach((letter, index) => {
        let elementLetter = document.createElement("span");
        elementLetter.id = 'letter-' + index;
        elementLetter.innerHTML = letter;
        spansArray[index] = elementLetter;
        target.appendChild(elementLetter);
    });


    //Waving function Definition
    let waving = () => {
        var size = originalSize;
        var i = 0; //Index of the span's array for looping
        var limit = textArray.length;

        let printMessage = setInterval(() => {
            for (let j = 1; j <= 5; j++) {
                size += (j + 4);
                if (i < limit) { document.getElementById(`letter-${i}`).style.fontSize = size + "px"; } else { break; }
                i++;
            }

            for (let j = 5; j >= 1; j--) {
                size -= (j + 4);
                if (i < limit) { document.getElementById(`letter-${i}`).style.fontSize = size + "px"; } else { break; }
                i++;
            }

            //Stopping the  effect
            if (i >= limit) { clearInterval(printMessage); }
        }, 200);
    };

    let iterations = setInterval(() => {
        //restauring the text
        textArray.forEach((l, index) => { document.getElementById(`letter-${index}`).style.fontSize = originalSize + "px"; });

        //Calling waving function
        waving();
    }, 5000);

})();