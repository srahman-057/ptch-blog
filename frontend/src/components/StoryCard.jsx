// A StoryCard encapsulates story information in a modular fashion.

function StoryCard() {
  return (
    // Each StoryCard is ready for insertion into a pre-existing flexbox container.

      <div className="card bg-indigo-300 border-purple-700 border-2 w-3/4 md:w-40 h-55 pl-2 pr-2 self-center bg-[url('')]">

        <br></br>
        
        <div className="text-xl">Story Title</div>
        <hr></hr>
        <div className="text-xs">Tages: Action | Adventure | Fantasy</div>
        <br></br>
        <div className="text-lg">
          Jules Verne's works blend meticulous scientific detail with imaginative adventure and exploration, often anticipating future.... 
        </div>
        <br></br>
        <div className="text-blue-700">Read More</div>

      </div>

    
  )
}

{/* <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
alt="Shoes" /> */}


export default StoryCard