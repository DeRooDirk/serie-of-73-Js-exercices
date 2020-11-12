/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        //Printing Keys
        console.log("  *- Keys -*   ");
        // Look for keys in object person for each key print key 
        Object.keys(person).forEach(Keys => {
            console.log(Keys);
        });

        //Printing Values
        console.log(" *- Values -*  ");
        // from some object take value object = person  , for each value print value
        Object.values(person).forEach(Value => {
            console.log(Value);
        });
    });
})();