import { API_KEY, BASE_URL } from "../apiClient";

export const fetchSearchResults = async (query: string) => {

  try {
    const songsResponse = await fetch(
      `${BASE_URL}?method=track.search&track=${encodeURIComponent(query)}&api_key=${API_KEY}&format=json`
    );
    const songsData = await songsResponse.json();

    const albumsResponse = await fetch(
      `${BASE_URL}?method=album.search&album=${encodeURIComponent(query)}&api_key=${API_KEY}&format=json`
    );
    const albumsData = await albumsResponse.json();

    const artistsResponse = await fetch(
      `${BASE_URL}?method=artist.search&artist=${encodeURIComponent(query)}&api_key=${API_KEY}&format=json`
    );
    const artistsData = await artistsResponse.json();

    return {
      tracks: songsData.results.trackmatches.track || [],
      albums: albumsData.results.albummatches.album || [],
      artists: artistsData.results.artistmatches.artist || [],
    };
  } catch (error) {
    console.error("Error fetching search results", error);
    throw new Error("Error fetching search results");
  }
};