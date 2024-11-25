import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItineraryAsync = createAsyncThunk(
    'itineraries/fetchItinerariesByCity',
    async (cityId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/itineraries/city/${cityId}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error("Error fetching itineraries:", error);
            throw error;
        }
    }
);
