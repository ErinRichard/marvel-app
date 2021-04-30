import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Captain America',
        description: "All-around good guy. Honest, loyal, and dependable",
        comics_appeared_in: '29',
        super_power: 'Super-Solider agility, strength, speed, endurance, and reaction time',
    } ,
    reducers: {
        // Will alter the state.name, state.price
        // All we're targeting here is just name and price
        chooseName: (state, action) => { state.name = action.payload }, 
        chooseSuperPower: (state, action) => { state.super_power = action.payload }
    }
})


// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseSuperPower, } = rootSlice.actions;