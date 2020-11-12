/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

setInterval(

    function zooWie() {

        // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

        //First we get the date of today 
        var today = new Date();
        // Check if we got it 
        //alert(today);
        // to get the right  thing display we neee to set them to what they need to be numeric or long  (in english ,see example ) we set what e want to see 
        var change = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        //Print the date in the tag  (id target ) en set options (changes ) to today 
        document.getElementById("target").innerHTML = today.toLocaleString('en-us', change);
    },
    1000);
zooWie();