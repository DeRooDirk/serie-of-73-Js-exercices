/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //Getting the old element (source)
    let oldKitten = document.getElementById("source");

    //Getting the container (the )
    let targetContainer = document.getElementById("target");

    //Creating image 
    let img = document.createElement("img");

    img.src = oldKitten.getAttribute("data-image");
    img.id = "myKitten";

    //Adding the new one
    targetContainer.appendChild(img);

    //Removing the old element
    oldKitten.remove();


})();