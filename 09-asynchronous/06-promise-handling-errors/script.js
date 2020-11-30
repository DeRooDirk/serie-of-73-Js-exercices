(() => {
    document.getElementById("run").onclick = () => {

        window.lib.getPersons().then(myPerson => {
            console.table(myPerson);
        }).catch(error => {
            console.error(error);
        });
    }
})();