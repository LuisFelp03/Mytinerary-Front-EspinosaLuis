import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCityDetailsAsync = createAsyncThunk(
  'details/fetchCityDetails',
  async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/cities/city/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching city details:", error);
      throw error;
    }
  }
);
