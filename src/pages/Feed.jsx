import { useDispatch, useSelector } from "react-redux"
import { actionModalClose, actionModalOpen, loadingStart, modalClose, modalOpen } from "../APP/Feature/Instagram/instagramSlice"
import ModalPopUp from "../components/Modal/ModalPopUp"
import { useState } from "react";
import { createNewPost } from "../APP/Feature/Instagram/instagramApiSlice";
import { cloudImageUpload } from "../utils/helper";
import Loader from "../components/Loader/Loader";
import ActionModal from "../components/Modal/ActionModal";
import Reels from "../components/Reels/Reels";
import LeftSidebar from "../Layouts/LeftSidebar/LeftSidebar";
import RightSidebar from "../Layouts/RightSidebar/RightSidebar";
import TimeLine from "../Layouts/TimeLine/TimeLine";



const Feed = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state)=>state.instagram);
  const [file,setFile] = useState(null);
  const [input, setInput] = useState({
    caption: '',
    updatedAt: null,
    trash: false,
    status: true,
    createdAt: Date.now(),
});

const handleInput =(e)=> {
    setInput((item)=>({
      ...item,
      [e.target.name] : e.target.value
    }));
};

const handleDataSubmit = async(e) => {
  e.preventDefault();
  dispatch(loadingStart());
  const fileData = await cloudImageUpload({
    fileName : file,
    preset: "webcoder_minhaj",
    cloudName: "webcoder-minhaj",
  });
  dispatch(createNewPost({...input, photo: fileData.secure_url}));
  dispatch(modalClose());

}

  return (
    <>
    <Loader isLoadingOn={loading}/>
    <ModalPopUp isModalOpen={modalOpen} title={""}>
    <form onSubmit={handleDataSubmit}>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="caption">
            Caption
        </label>
        <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="caption"
            placeholder="Caption"
            onChange={handleInput}
            name="caption"
            value = {input.caption}
        ></textarea>
      </div>
      <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             type="file"
              onChange={(e)=>setFile(e.target.files[0])}          
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
              Post
          </button>
        </div>               
    </form>
    </ModalPopUp>
    <ActionModal actionModal={actionModalOpen} title={""}>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-md w-96 max-w-full">
        {/* Modal Content */}
        <div className="flex flex-col">
          {/* Modal Buttons */}
          <button className="py-3 border-b border-gray-300 text-red-500 hover:bg-gray-100">
            Delete
          </button>
          <button className="py-3 border-b border-gray-300 hover:bg-gray-100">
            Edit
          </button>
          <button className="py-3 border-b border-gray-300 hover:bg-gray-100">
            Add to Favourites
          </button>
          <button className="py-3 border-b border-gray-300 hover:bg-gray-100">
            <a href="/reel/DEpKzWlPN7m/" className="text-blue-500 hover:underline">
              Go to Post
            </a>
          </button>
          <button className="py-3 border-b border-gray-300 hover:bg-gray-100">
            Share to...
          </button>
          <button className="py-3 border-b border-gray-300 hover:bg-gray-100">
            Copy Link
          </button>
          <button className="py-3 border-b border-gray-300 hover:bg-gray-100">
            Embed
          </button>
          <button className="py-3 border-b border-gray-300 hover:bg-gray-100">
            About This Account
          </button>
          <button onClick={()=>dispatch(actionModalClose())} className="py-3 text-gray-500 hover:bg-gray-100">Cancel</button>
        </div>
      </div>
    </div>
    </ActionModal>
  <div className="flex justify-between">
  <LeftSidebar/>
  <div className="flex-1  px-4 py-6">
  
    <div className="max-w-lg mx-auto grid gap-6">
    <Reels/>
      {/* Post Card */}
      <TimeLine/>
    </div>
    {/*post Card End Here*/}
  </div>
  {/* Right Sidebar */}
  <RightSidebar/>
  </div>
    </>
  )
}

export default Feed