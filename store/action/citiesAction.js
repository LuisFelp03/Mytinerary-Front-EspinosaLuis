import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setSearchTerm = createAction('cities/setSearchTerm');
export const fetchCities = createAction('cities/fetchCities');

export const fetchCitiesAsync = createAsyncThunk(
  'cities/fetchCities',
  async (searchTerm = "") => {
    const query = searchTerm ? `?name=${searchTerm}` : "";
    const response = await fetch(`http://localhost:8080/api/cities/all${query}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data.response;
  }
);
