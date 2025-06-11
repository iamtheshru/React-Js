import { createSlice } from "@reduxjs/toolkit";
import userdata from "../logindata/logidata.tsx";


const loginReducer = createSlice({
    name: "userdata",
    initialState: userdata,
    reducers: {}
});

export default loginReducer.reducer;