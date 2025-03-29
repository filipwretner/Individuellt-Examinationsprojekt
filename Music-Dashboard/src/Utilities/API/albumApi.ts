import { API_KEY, BASE_URL } from "../apiClient";

export const fetchAlbumData = async (artist: string, album: string) => {

    const response = await fetch(
        `${BASE_URL}?method=album.getinfo&artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}&api_key=${API_KEY}&format=json`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch album data");
    }

    const data = await response.json();

    const tracks = data.album.tracks
    ? Array.isArray(data.album.tracks.track)
    ? data.album.tracks.track : [data.album.tracks.track] : [];
    
    return {
    titel: data.album.name,
    artist: data.album.artist,
    tracks,
};  
}