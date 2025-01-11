import { createSlice } from "@reduxjs/toolkit";
import { createNewPost, getAllPost } from "./instagramApiSlice";

const instagramSlice = createSlice({
    name : "instagram",
    initialState : {
        instagrampost : [],
        messege : null,
        error : null,
        loading : false,
        isModalOpen : false,
        actionModal : false,
        selectedPostId: null,
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
    },
    
});

//export default instagram actions
export const {modalOpen,modalClose,loadingStart,actionModalOpen,actionModalClose,setSelectedPostId,clearSelectedPostId} = instagramSlice.actions;

// export default instagram slice reducer
export default instagramSlice.reducer;