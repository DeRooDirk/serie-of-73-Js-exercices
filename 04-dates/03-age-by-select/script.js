/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.(function () {


(function() {

    // Add en event listerenr to button ( id run )
    document.getElementById("run").addEventListener("click", function() {
        // Get today's date 
        let datumVandaag = new Date();
        // Get Birthday from form 
        let verjaardag = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value, document.getElementById("dob-day").value);
        //calculate age year and month (datum - birthrecords)
        let age = datumVandaag.getFullYear() - verjaardag.getFullYear();
        let months = datumVandaag.getMonth() - verjaardag.getMonth();


        // if we are in a different month or/and day of birthday. 
        if (months < 0 || (months === 0 && datumVandaag.getDate() < verjaardag.getDate())) {
            age--;
        }
        //display results in a box ( id result )
        document.getElementById("result").innerHTML = " <h4 style=\"text-align: center;\"> His/Her age is: " + age + " Years old!! </h4>";

    });


})();