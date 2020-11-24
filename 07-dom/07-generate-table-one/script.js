/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let container = document.getElementById("target");
    let table = document.createElement("table");
    let bodyTable = document.createElement("tbody");



    //Creating the rows and cells
    for (i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        let column = document.createElement("td");

        column.innerHTML = "I haven’t failed. I’ve just found 10,000 ways that won’t work..– Thomas Edison";
        row.appendChild(column);
        bodyTable.appendChild(row);
    }

    table.appendChild(bodyTable);
    container.appendChild(table);

})();