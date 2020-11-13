/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        { name: "seagull", num: 1 },
        { name: "raven", num: 3 },
        { name: "chickadee", num: 2 },
        { name: "owl", num: 4 },
        { name: "buzzard", num: 8 },
        { name: "pigeon", num: 1 },
        { name: "magpie", num: 3 },
        { name: "vulture", num: 2 },
        { name: "falcon", num: 1 },
        { name: "robin", num: 2 },
        { name: "dove", num: 1 },
        { name: "crow", num: 5 },
    ];
    const adjectives = new Set([
        "gray",
        "hoopoe",
        "singing",
        "howling",
        "perched",
        "tall",
        "small",
        "blue",
        "panting",
        "tangent",
        "sported",
    ]);

    // your code here
    //get click
    document.getElementById("run").addEventListener("click", () => {
        //Creating new 
        let singleBird = [];
        let adjective = [];
        let newArrayAdjectives = Array.from(adjectives);

        //
        singleBird.push(birds[Math.floor(Math.random() * (birds.length))]);
        adjective.push(newArrayAdjectives[Math.floor(Math.random() * (newArrayAdjectives.length))]);

        if (singleBird[0].num > 1) {
            document.getElementById("target").innerHTML = "<p>" + "A few " + adjective + " " + singleBird[0].name + "s" + " </p>";
        } else {
            document.getElementById("target").innerHTML = "<p>" + "A " + adjective + " " + singleBird[0].name + " </p>";
        }

    });
})();