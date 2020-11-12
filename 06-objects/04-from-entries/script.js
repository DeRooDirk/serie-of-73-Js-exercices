/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // your code here

    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    // Mapping the two arrays  (how to map array )
    let newArray = new Map();
    keys.forEach((item, index) => {
        newArray.set(item, values[index]);
    });

    //Creating the Object
    const pet = Object.fromEntries(newArray);
    //When click (eventlistener)
    document.getElementById("run").addEventListener("click", () => {

        //Printing Keys (same exersise before )
        console.log("  *- Keys  -*   ");
        Object.keys(pet).forEach(Key => {
            console.log(Key);
        });

        //Printing Values
        console.log(" *- Values -*  ");
        Object.values(pet).forEach(Value => {
            console.log(Value);
        });

    });
})();