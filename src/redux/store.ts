import { configureStore } from '@reduxjs/toolkit';
// Slices means that it's a slice (or a part of) the store
import { reducer } from './slices/rootSlice'

export const store = configureStore({
    reducer,
    devTools: true
})