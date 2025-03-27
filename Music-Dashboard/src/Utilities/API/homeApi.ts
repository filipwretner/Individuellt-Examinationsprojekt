import { API_KEY, BASE_URL } from "../apiClient";

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
    
    return response.json(); 
};