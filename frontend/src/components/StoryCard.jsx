import React from 'react';

const StoryCard = (props) => {
  const { height, width } = props; 
  const BG_IMG_URL='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%27The_Mysterious_Island%27_by_Jules_F%C3%A9rat_011.jpg/120px-%27The_Mysterious_Island%27_by_Jules_F%C3%A9rat_011.jpg';

  return (

      <div className={`w-${width} h-${height} md:w-80 md:h-max m-2 bg-indigo-100 border-purple-700 border-2 p-4 self-center `}>
        {/* bg-[url()] */}
        <div className="flex w-full h-10 overflow-hidden pb-1">
          <img 
            className="w-full object-none" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/%27The_Mysterious_Island%27_by_Jules_F%C3%A9rat_011.jpg/120px-%27The_Mysterious_Island%27_by_Jules_F%C3%A9rat_011.jpg"
            alt="Book" 
          />  
        </div>
        
        <div className="text-2xl font-bold">Mysteries of Jules Verne</div>
        <hr class="h-px mt-1 bg-black border-0 dark:bg-gray-700"></hr>

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




export default StoryCard