import { API_KEY, BASE_URL } from "../apiClient";

export const fetchArtistData = async (artist: string) => {

    const response = await fetch(
        `${BASE_URL}?method=artist.gettopalbums&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
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