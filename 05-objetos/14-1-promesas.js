const fetchPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = true;

            if(error){
                reject('Hubo un error al intentar obtener los posts');
            } else {
                resolve(posts)
            }
        }, 2000);
    });
};

fetchPost().then((posts) => {
    console.log(posts);
});

fetchPost().catch((error) => {
    console.log(error);
    
});