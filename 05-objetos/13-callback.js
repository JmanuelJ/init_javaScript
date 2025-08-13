const getUserPost = (user, callback) => {
    console.log(`Obteniendo los posts del usuario ${user}...`);

    setTimeout(() => {
        let posts = ['post1', 'post2', 'post3'];
        callback(posts);
    }, 2000); 
};

getUserPost('Juan', (posts) => {
    console.log(posts);
});