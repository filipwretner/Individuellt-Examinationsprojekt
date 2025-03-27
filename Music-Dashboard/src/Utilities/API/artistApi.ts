import { API_KEY, BASE_URL } from "../apiClient";

export const fetchArtistAlbums = async (artist: string) => {
    const response = await fetch(
        `${BASE_URL}?method=artist.gettopalbums&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    return data.topalbums.album; // Extract the album array
};

export const fetchArtistSongs = async (artist: string) => {
    const response = await fetch(
        `${BASE_URL}?method=artist.gettoptracks&artist=${encodeURIComponent(artist)}&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    return data.toptracks.track; // Extract the track array
};
    

    
