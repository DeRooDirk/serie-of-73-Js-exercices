(() => {
    document.getElementById("run").onclick = () => {
        const myAsyncPerson = async() => {

            return await window.lib.getPersons();
        }

        myAsyncPerson().then(myPerson => {
            console.table(myPerson);
        }).catch(error => {
            console.error(error);
        });
    }
})();