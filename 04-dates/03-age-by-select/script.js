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
        let currentDate = new Date();
        // Get Birthday from form 
        let BirthDate = new Date(
            document.getElementById("dob-year").value,
            document.getElementById("dob-month").value,
            document.getElementById("dob-day").value
        );
        //calculate age year and month (datum - birthrecords)
        let age = currentDate.getFullYear() - BirthDate.getFullYear();
        let months = currentDate.getMonth() - BirthDate.getMonth();


        // if we are in a different month or/and day of birthday. 
        if (months < 0 || (months === 0 && currentDate.getDate() < BirthDate.getDate())) {
            age--;
        }
        //display results in a box ( id result )
        document.getElementById("result").innerHTML = " <p> Has seen " + age + " Winters !! </p>";

    });


})();