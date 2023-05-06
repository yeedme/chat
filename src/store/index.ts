import { configureStore } from "@reduxjs/toolkit";
import  selectloginId  from "./loginInformation";
export default configureStore({
    reducer:{
        counter:selectloginId,
    }
})