const RightSidebar = () => {
  return (
    <>
    <div className="bg-white shadow-sm min-w-80 h-screen p-4 fixed right-0 top-0">
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h2 className="font-semibold mb-4">Suggestions</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-semibold">User1</h3>
              <p className="text-sm text-gray-500">Follows you</p>
            </div>
          </div>
          <button className="text-blue-500 font-semibold">Follow</button>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-semibold">User2</h3>
              <p className="text-sm text-gray-500">Follows you</p>
            </div>
          </div>
          <button className="text-blue-500 font-semibold">Follow</button>
        </li>
      </ul>
    </div>

    <div className="bg-white rounded-lg shadow-sm p-4 mt-2">
      <h2 className="font-semibold mb-4">Find Friends</h2>
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-semibold">Rofiq</h3>
              <p className="text-sm text-gray-500">send request</p>
            </div>
          </div>
          <button className="text-white font-semibold bg-[#0861F2] rounded-md px-2 py-[2px]">Accept</button>
        </li>
        <hr />
        <li className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <h3 className="font-semibold">Sahadat</h3>
              <p className="text-sm text-gray-500">send request</p>
            </div>
          </div>
          <button className="text-white font-semibold bg-[#0861F2] rounded-md px-2 py-[2px]">Accept</button>
        </li>
       
      </ul>
    </div>
  </div>
    </>
  )
}

export default RightSidebar