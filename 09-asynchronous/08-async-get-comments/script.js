(() => {
    document.getElementById("run").addEventListener("click", () => {

        const myAsyncPost = async() => {
            return await window.lib.getPosts();
        };

        const myAsyncComments = async(id) => {
            return await window.lib.getComments(id);
        };

        myAsyncPost().then(myPosts => {

            let commentedPosts = myPosts.map(onePost => {
                myAsyncComments(onePost.id).then(myComment => {
                    onePost.comment = myComment;
                    return onePost;
                }).catch(error => { console.error(error); });

            });
            console.table(myPosts);

        }).catch(error => { console.error(error); });

    });
})();