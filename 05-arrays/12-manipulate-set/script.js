/* becode/javascript
 *
 * /05-arrays/12-manipulate-set/script.js - 5.12: manipulation d'un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here

    //click in html 
    document.getElementById("run").addEventListener("click", () => {
        //check for apple , delete apple 
        if (fruits.has("apple")) {
            fruits.delete("apple");
        } else {
            console.log("We have no Apple's , nobody got time for that !!  ");
        }
        // Check for cherry delete cherry 
        if (fruits.has("cherry")) {
            fruits.delete("cherry");
        } else {
            console.log("We have no Cherry's , nobody got time for that !!   ");
        }
        //Adding Banana&kiwi
        fruits.add("banananas");
        fruits.add("kiwini");
        //Log new array fruits
        console.log(fruits);

    });
})();