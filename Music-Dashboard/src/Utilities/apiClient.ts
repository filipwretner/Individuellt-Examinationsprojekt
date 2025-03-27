const API_KEY = "ab50c12e76209c403b61bf439fdf938a";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";


export const fetchTrendingMusic = async () => {

    const response = await fetch(
        `${BASE_URL}?method=chart.getTopTracks&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch trending music");
    }
    return response.json();
};

export const fetchSimilarSongs = async () => {
    const response = await fetch(
        `${BASE_URL}?method=track.getsimilar&artist=tesseract&track=legion&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch similar songs");
    }
    const data = await response.json();
    return data.similartracks.track; // This will return an array of similar tracks
};

// export const fetchNewReleases = async () => {

//     try {
//         const response = await fetch(
//             `${BASE_URL}?method=album.search&api_key=${API_KEY}&format=json&limit=10&sort=release_date`

//         );
//         const data = await response.json();

//         if (!response.ok) {
//             throw new Error(data.message || "Failed to fetch new releases");
//         }

//         return data;
//     } catch (error) {
//         console.error("Failed to fetch new releases", error);
//         throw error;
//     }
//     // const response = await fetch(
//     //     `${BASE_URL}?method=chart.gettopalbums&api_key=${API_KEY}&format=json`
//     // );
//     // if (!response.ok) {
//     //     throw new Error("Failed to fetch new releases");
//     // }
//     // return response.json();
// };

export const fetchSearchResults = async (query: string) => {

    const response = await fetch(
      `${BASE_URL}?method=search.getall&api_key=${API_KEY}&format=json&limit=10&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch using search query");
    }
    return response.json();
};

export const fetchArtistData = async (artist: string) => {

    const response = await fetch(
        `${BASE_URL}?method=artist.getinfo&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch artist data");
    }
    return response.json();
}

export const fetchArtistTopSongs = async (artist: string) => {

    const response = await fetch(
        `${BASE_URL}?method=artist.gettoptracks&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch artist songs");
    }
    return response.json();
}

export const fetchAlbumData = async (artist: string, album: string) => {

    const response = await fetch(
        `${BASE_URL}?method=album.getinfo&artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch album data");
    }
    return response.json();   
}