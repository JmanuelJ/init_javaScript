const fetchpost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = true;

            if (error) {
                reject('Hubo un error al intentar obtener los posts');
            } else {
                resolve(posts)
            }
        }, 2000);
    });
};

const showPost = async () => {
    try {
        const posts = await fetchpost();
        console.log(posts);
    } catch(error) {
        console.log(error);
        
    }
}
showPost();