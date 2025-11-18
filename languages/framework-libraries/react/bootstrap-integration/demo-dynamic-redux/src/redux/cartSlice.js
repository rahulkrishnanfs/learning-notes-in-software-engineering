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
            // state.cartItems.push(action.payload); before it was like this 

            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex === -1 ){
                state.cartItems.push({...action.payload, quantiy: 1})
            }else{
                state.cartItems[itemIndex].quantiy++;
            }
        },
        removeCartItem: (state, action)=>{
            const itemIndex = state.cartItems.findIndex((item)=> item.id === action.payload.id)
            if (itemIndex.id !== -1){
                state.cartItems.splice(itemIndex,1)
            }
        }
    }
});


//addToCart({id:1, productName: 'sample1 , price: 100'})
export const {addToCart,removeCartItem} = cartSlice.actions;
export default cartSlice.reducer; // this is inbuild properties