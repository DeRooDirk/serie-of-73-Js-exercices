(() => {

    document.getElementById("run").onclick = () => {
        window.lib.getPosts((error, myArticle) => {
            if (error) { console.log(error); } else {
                console.table(myArticle);
            }
        });
    };

})();