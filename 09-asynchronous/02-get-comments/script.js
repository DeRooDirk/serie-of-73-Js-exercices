(() => {
    document.getElementById("run").onclick = () => {
        window.lib.getPosts((error, myArticle) => {
            if (error) {
                console.log(error);
            } else {
                let commentedArticle = myArticle.map((oneArticle) => {
                    window.lib.getComments(oneArticle.id, (error, myComment) => {
                        if (error) {
                            console.log(error);
                        } else {
                            oneArticle.comment = myComment;
                        }
                    });
                    return oneArticle;
                });
                console.log(commentedArticle);
            }
        });
    };
})();