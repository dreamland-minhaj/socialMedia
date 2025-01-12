import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createNewPost = createAsyncThunk("instagram/createNewPost", async(data)=>{
    try {
        const response = await axios.post("http://localhost:5050/post",data);
        return response.data;
    } catch (error) {
        throw new error(error.messege);
    }
});

export const getAllPost = createAsyncThunk("instagram/getAllPost", async()=>{
    try {
        const response = await axios.get("http://localhost:5050/post");
        return response.data;
    } catch (error) {
        throw new error(error.messege);
    }
});

export const deletePost = createAsyncThunk("instagram/deletePost", async(id)=>{
    try {
        const response = await axios.delete(`http://localhost:5050/post/${id}`);
        return response.data;
    } catch (error) {
        throw new error(error.messege);
    }
});

