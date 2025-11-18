import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cartSlice",
    initialState: {
        cartItems: [],
        error: null,
        loading: false
    },
    reducers: {
        addToCart: (state, action)=>{ // action = {payload: <argument passinhg>}, state is pointing to intialstate object
            state.cartItems.push(action.payload);
        },
        removeCartItem: (state, action)=>{

        }
    }
});


//addToCart({id:1, productName: 'sample1 , price: 100'})
export const {addToCart,removeCartItem} = cartSlice.actions;
export default cartSlice.reducer; // this is inbuild properties