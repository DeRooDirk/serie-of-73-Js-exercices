(() => {
    document.getElementById("run").addEventListener("click", () => {
        let p = window.lib.getPosts();
        p.then(myArticles => {
            console.table(myArticles);
        }).catch(error => {
            console.error(error);
        });
    });
})();