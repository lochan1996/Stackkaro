import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log("===action1==", action.payload, state.cart)

            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                // action.payload.action == 'increment' ? itemInCart.quantity++ : itemInCart.quantity--;
                itemInCart.quantity++
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            console.log("===action2==", action, state.counter)
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            console.log("==item--", item)
        },
        decrementQuantity: (state, action) => {
            console.log("===action3==", action)
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity--;
        }
    },
});

export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions;