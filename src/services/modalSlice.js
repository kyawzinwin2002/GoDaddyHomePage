import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal:false
}



export const modalSlice = createSlice({
    name:"modalSlice",
    initialState,
    reducers:{
        MODAL:(state) => {
            state.modal = !state.modal
        }
    }
})

export const { MODAL } = modalSlice.actions
export default modalSlice.reducer