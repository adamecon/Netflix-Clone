const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd139787184783305c49cd2299c7223d3', 
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

}

export default apiConfig;