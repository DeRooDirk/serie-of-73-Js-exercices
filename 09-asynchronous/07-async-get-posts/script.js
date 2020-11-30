(() => {
    document.getElementById("run").onclick = () => {

        const myAsyncPosts = async() => {
            return await window.lib.getPosts();
        };

        myAsyncPosts().then(myPost => { console.table(myPost); }).catch(error => { console.error(error); });

    };
})();