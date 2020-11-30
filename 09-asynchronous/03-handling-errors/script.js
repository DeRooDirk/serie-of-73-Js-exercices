(() => {
    document.getElementById("run").onclick = () => {

        window.lib.getPersons((error, myPeople) => {
            if (error) {
                console.error(error);
            } else {
                console.table(myPeople);
            }
        });
    };

})();