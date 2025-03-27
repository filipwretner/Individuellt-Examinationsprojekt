import { API_KEY, BASE_URL } from "../apiClient";

export const fetchSearchResults = async (query: string) => {

    const response = await fetch(
      `${BASE_URL}?method=search.getall&api_key=${API_KEY}&format=json&limit=10&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch using search query");
    }
    return response.json();
};