/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("tr");
        for (let dirk = 0; dirk < 10; dirk++) {
            let column = document.createElement("td");
            column.innerHTML = (i + 1) * (dirk + 1);
            row.appendChild(column);
        }
        bodyTable.appendChild(row);
    }

    table.appendChild(bodyTable);

    container.appendChild(table);

})();