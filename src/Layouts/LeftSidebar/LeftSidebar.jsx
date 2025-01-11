import { useDispatch } from "react-redux"
import { modalOpen } from "../../APP/Feature/Instagram/instagramSlice";

const LeftSidebar = () => {
    const dispatch = useDispatch();

  return (
    <>
    <div className="left-sidebar bg-white h-screen p-4 shadow-lg w-64 fixed hidden md:block">
    <div className="sidebar-menu mb-6">
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-home">🏠</i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-search">🔍</i>
            <span>Search</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-explore">🧭</i>
            <span>Explore</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-messages">✉️</i>
            <span>Reels</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-messages">✉️</i>
            <span>Messages</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-notifications">🔔</i>
            <span>Notifications</span>
          </a>
        </li>
        <li onClick={()=>dispatch(modalOpen())}>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-profile">👤</i>
            <span>Create</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-profile">👤</i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-2 text-lg py-2 px-4 hover:bg-gray-200 rounded-md"
          >
            <i className="icon-profile">👤</i>
            <span>Profile</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
    </>
  )
}

export default LeftSidebar