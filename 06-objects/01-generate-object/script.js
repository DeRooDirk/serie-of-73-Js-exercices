/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function zoo() {
    // your code here

    //adventlistener on button with id click
    document.getElementById("run").addEventListener("click", () => {
        // creat the obj dirk with  empty value's 
        let objDirk = { lastname: "", firstname: "", age: 0, boeredorp: "", country: "" };
        //ask for proper values 
        objDirk.lastname = prompt("Please enter your lastname: ");
        objDirk.firstname = prompt("Please enter your fisrtname: ");
        objDirk.age = prompt("Please enter your age: ");
        objDirk.boeredorp = prompt("Please enter the city where you live: ");
        objDirk.country = prompt("Please enter the country where you live: ");

        console.log(objDirk);
    });
}
zoo();