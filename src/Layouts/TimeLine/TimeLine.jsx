import { useDispatch, useSelector } from "react-redux";
import { timeAgo } from "../../utils/helper";
import { FaRegHeart,FaTelegramPlane } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { actionModalOpen } from "../../APP/Feature/Instagram/instagramSlice";

const TimeLine = () => {
    const dispatch = useDispatch();
    const {instagrampost} = useSelector((state)=>state.instagram);
    
    const handlepostMenu = (id) => {
      dispatch(actionModalOpen());

    }
  return (
    <>
    {[...instagrampost].reverse().map((item)=>{
        return(
          <div key={item.id} className="flex flex-col items-center">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden my-4">
              {/*post Card Header*/}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center px-4 py-3">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="User avatar"
                  />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <span className="text-base font-semibold antialiased block leading-tight mr-1">
                        Minhajul Islam .{" "}
                      </span>
                      <span className="text-sm font-light antialiased block leading-tight">
                        {" "}
                        {timeAgo(item.createdAt)}
                      </span>
                    </div>
                    <span className="text-gray-600 text-sm block">Dhaka</span>
                  </div>
                </div>
                <button  onClick={()=>handlepostMenu(item.id)} className="text-black focus:outline-none ">
                  <span className="text-xl">...</span>
                </button>
              </div>
              {/*post Card Header End*/}
              {/*post Card Image*/}
              <img
                className="w-full"
                src={item.photo}
                alt="Post"
              />
              {/*post Card footer*/}
              <div className="px-4 py-3">
                <div className="flex items-center">
                  <button className="text-black focus:outline-none flex justify-normal gap-1">
                    <span className="text-xl"><FaRegHeart/></span>
                    <span className="text-xl"><FaTelegramPlane/></span>
                    <span className="text-xl"><IoChatbubbleOutline/></span>
                  </button>
                </div>
                <div className="reactionCounter mt-2 text-sm text-gray-700">
                  <span className="font-semibold">140 likes</span>
                </div>
                <div className="mt-2 text-base text-gray-700">
                  <span className="font-semibold">{item.caption}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  View all 140 comments
                </div>
                <div className="mt-2">
                  <input
                    className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
                    type="text"
                    placeholder="Add a comment..."
                  />
                </div>
              </div>
              {/*post Card footer End*/}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default TimeLine
