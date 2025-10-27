import React from 'react';

const StoryCard = (props) => {
  const { height, width } = props; // Destructure props for easier access

  return (


      <div className={`w-${width} h-${height} md:w-80 md:h-max m-2 bg-indigo-100 border-purple-700 border-2 p-4 self-center bg-[url('')] `}>

        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        <br></br>
        
        <div className="text-2xl font-bold">Mysteries of Jules Verne</div>
        <hr class="h-px mt-4 bg-black border-0 dark:bg-gray-700"></hr>

        <div className="text-xs italic m-1"> Tags: 
          <button className="btn btn-primary m-1 btn-xs">Action</button>
          <button className="btn btn-secondary m-1 btn-xs">Sci-Fi</button>

        </div>

        <br></br>
        <div className="text-lg">
          Jules Verne's works blend meticulous scientific detail with imaginative adventure and exploration, often anticipating future.... 
        </div>
        <br></br>
        <div className="text-blue-700">Read More</div>

      </div>
  );
};


// {/* <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
// alt="Shoes" /> */}

export default StoryCard