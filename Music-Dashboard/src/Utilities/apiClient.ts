const API_KEY = "";
const BASE_URL = "https://ws.audioscrobbler.com/2.0/";

export const fetchNewReleases = async () => {

    const response = await fetch(
        `${BASE_URL}?method=album.gettopalbums&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch trending music");
    }
    return response.json();
};

export const fetchTrendingMusic = async () => {

    const response = await fetch(
        `${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch trending music");
    }
    return response.json();
};

export const fetchSearchResults = async (query: string) => {

    const response = await fetch(
      `${BASE_URL}?method=search.getall&api_key=${API_KEY}&format=json&limit=10&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch trending music");
    }
    return response.json();
};

export const fetchArtistData = async (artist: string) => {

    const response = await fetch(
        `${BASE_URL}?method=artist.getinfo&artist=${artist}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch trending music");
    }
    return response.json();
}

export const fetchArtistTopSongs = async (artist: string) => {

    const response = await fetch(
        `${BASE_URL}?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch trending music");
    }
    return response.json();
}

export const fetchAlbumData = async (artist: string, album: string) => {

    const response = await fetch(
        `${BASE_URL}?method=album.getinfo&artist=${artist}&album=${album}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch trending music");
    }
    return response.json();   
}