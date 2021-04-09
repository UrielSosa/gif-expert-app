export const getGif = async (category) => {
    let cat = encodeURI(category);
    const url = `https://api.giphy.com/v1/gifs/search?q=${cat}&limit=10&api_key=j6iQjVyH86jL4dj0dmeOSrgKP0WPIRbp`
    const resp = await fetch( url );
    const {data} = await resp.json();
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}