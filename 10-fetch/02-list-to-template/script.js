/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    const btn = document.querySelector("#run");
    fetch('http://localhost:3000/heroes')
        .then(
            function(response) {
                //console.log(response)


                response.json().then(function(heroes) {

                    heroes.forEach(hero => {
                        console.log(hero.name);

                        //target.textContent =<li>" + hero.id + "</li>"

                    });
                });
            }
        );

})();