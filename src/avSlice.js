import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
    name: "av",
    initialState: [
        {
            img: "/Projector.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
        },
        {
            img: "/Speakers.jpg",
            name: "Speaker",
            cost: 35,
            quantity: 0,
        },
        {
            img: "/Microphone.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
        },
        {
            img: "/Whiteboard.jpg",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
        },
        {
            img: "/Sign.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0,
        },
    ],


    reducers: {
        incrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if (item) {
                item.quantity++;
            }
        },
        decrementAvQuantity: (state, action) => {
            const item = state[action.payload];
            if (item && item.quantity > 0) {
                item.quantity--;
            }
        },
    },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
