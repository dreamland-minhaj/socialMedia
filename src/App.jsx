import { useDispatch } from "react-redux"
import "./App.css"
import Feed from "./pages/feed"
import { useEffect } from "react";
import { getAllPost } from "./APP/Feature/Instagram/instagramApiSlice";

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllPost())
  },[dispatch]);



  return (
    <><Feed/></>
  )
}

export default App
