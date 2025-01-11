const Reels = () => {
  return (
    <>
<div>
  {/* Reels Section */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {/* Single Reel Card */}
    <div className="relative group">
      {/* Video Container */}
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
      <div className="flex items-center px-4 py-3 absolute">
        <img className="h-10 w-10 rounded-full object-cover" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User avatar" />        
        </div>
        <img
          src="https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md font-medium hover:bg-gray-100">
          Watch
        </button>
      </div>
    </div>
    {/* More Reel Cards */}
    <div className="relative group">
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
      <div className="flex items-center px-4 py-3 absolute">
        <img className="h-10 w-10 rounded-full object-cover" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User avatar" />        
        </div>
        <img
          src="https://images.pexels.com/photos/29973769/pexels-photo-29973769/free-photo-of-graceful-deer-in-natural-habitat-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md font-medium hover:bg-gray-100">
          Watch
        </button>
      </div>
    </div>
    <div className="relative group">
      {/* Video Container */}
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
      <div className="flex items-center px-4 py-3 absolute">
        <img className="h-10 w-10 rounded-full object-cover" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User avatar" />        
        </div>
        <img
          src="https://img.freepik.com/free-photo/close-up-smiley-woman-working-laptop_23-2149300651.jpg?t=st=1736588612~exp=1736592212~hmac=ba4d4aedf7b8ba6e58e6a392996047c2c4e582ca812896be7e2a25ce228becfe&w=360"
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md font-medium hover:bg-gray-100">
          Watch
        </button>
      </div>
    </div>
    {/* More Reel Cards */}
    <div className="relative group">
      <div className="overflow-hidden rounded-lg shadow-md bg-white">
      <div className="flex items-center px-4 py-3 absolute">
        <img className="h-10 w-10 rounded-full object-cover" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User avatar" />        
        </div>
        <img
          src="https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-gray-800 py-2 px-4 rounded-lg shadow-md font-medium hover:bg-gray-100">
          Watch
        </button>
      </div>
    </div>
    
  </div>
</div>

    </>
  )
}

export default Reels