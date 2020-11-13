/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */ //ReNe's Solution 
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

document.getElementById("run").addEventListener("click", function() {

    //null will make it so the date starts from januari the first 1970
    // this is not a bug but because the unix epoch timestamps (used by the Date object starts counting from that moment)
    var date = new Date(null);
    date.setFullYear(Number(document.getElementById("year").value));

    var listOfSpookyMonths = [];
    //We need to iterate over every month of the year, set the day to 13 and check if the weekday is friday.
    //if so add the month to the list.
    for (let i = 0; i < 12; i++) {
        date.setMonth(i);
        date.setDate(13);

        //Friday is the fifth day of the week if you count sunday as the first and start counting from 0.
        if (date.getDay() == 5) {
            console.log(`Date is spooky: ${date.toLocaleDateString()}`);

            //getMonth returns a nr which corresponds with the index of the array I defined above.
            listOfSpookyMonths.push(monthNames[date.getMonth()]);
        }
    }

    alert(`The list of spooky months are: ${listOfSpookyMonths.toString()}`);


});