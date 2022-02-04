export const loadPost = async() => {

    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts') // buscando a api posts

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos') // buscando a api photos

    const [posts, photos] = await Promise.all([postResponse, photosResponse]) // guardando mais de uma promessa em um vetor

    const postsjson = await posts.json() // convertendo a resposta de posts para json

    const photosjson = await photos.json() // convertendo a resposta para photos json

    // o numero de posts é 100 e o de fotos é 5000, então usaremos a função ziper para pegar os 100 primeiras fotos e integrar aos 100 primeiros posts
    const photosEndPosts = postsjson.map((posts, index) => {

        return { ...posts, cover: photosjson[index].url }
    })

    return photosEndPosts
}