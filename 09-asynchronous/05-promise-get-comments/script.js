(() => {
    document.getElementById("run").onclick = () => {

        let myPromiseArticles = window.lib.getPosts();

        myPromiseArticles.then(MyArticles => {

            MyArticles.map(oneArticle => {
                    let myPromiseComments = window.lib.getComments(oneArticle.id);
                    myPromiseComments.then(MyComments => {
                        oneArticle.comment = MyComments;
                        return oneArticle;
                    }).catch(error => {
                        console.error("Comment Error:" + error);
                    });
                })
                //Printing commented articles    
            console.table(MyArticles);

        }).catch(error => {
            console.error("Article Error: " + error);
        });

    }

})();