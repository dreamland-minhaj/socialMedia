import { createSlice } from "@reduxjs/toolkit";
import { createNewPost, deletePost, getAllPost } from "./instagramApiSlice";

const instagramSlice = createSlice({
    name : "instagram",
    initialState : {
        instagrampost : [],
        messege : null,
        error : null,
        loading : false,
        isModalOpen : false,
        actionModal : false,
        counter : 0
    },
    reducers : {
        modalOpen: (state)=>{
            state.isModalOpen = true;
        },
        modalClose : (state) => {
            state.isModalOpen = false;
        },
        loadingStart : (state)=>{
            state.loading = true;
        },
        actionModalOpen : (state)=>{
            state.actionModal = true;
        },
        actionModalClose : (state)=>{
            state.actionModal = false;
        },
        incrementCounter : (state)=>{
            state.counter = state.counter+1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNewPost.fulfilled, (state, action) => {
                state.instagrampost.push(action.payload);
                state.loading = false;
            })
            .addCase(getAllPost.fulfilled, (state, action) => {
                state.instagrampost = action.payload;
                state.loading = false;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.instagrampost = state.instagrampost.filter((item) => item.id !== action.payload.id);
                state.loading = false;
            })
            
    },
    
});

//export default instagram actions
export const {modalOpen,modalClose,loadingStart,actionModalOpen,actionModalClose,incrementCounter} = instagramSlice.actions;

// export default instagram slice reducer
export default instagramSlice.reducer;