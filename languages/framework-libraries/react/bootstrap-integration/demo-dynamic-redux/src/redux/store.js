import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

const store = configureStore({ // we need to bring this slice to store
    reducer:{
        cartState:cartReducer
    }
}); //function return store-> this is to create the store 

// we have store == store contain slice , slice has action wihch point to reducer --
//  we will import action
// action  and dispatch it wich will update the store in the state

export default store;
