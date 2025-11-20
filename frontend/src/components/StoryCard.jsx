// Standardized StoryCard component allows spawning various sizes of StoryCards at will

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength);
  } else {
    return str;
  }
}

const StoryCard = (props) => {
  const { id, height, width, title, image, content, date, category } = props; // Destructure props for easier access
  const formatted_date = truncateString(date,10);
  //console.log(category);
  //console.log(id);

  // Craft URL
  const VITE_FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL; // URL of frontend
  const STORYPAGEURL = VITE_FRONTEND_URL + "story/" + id;

  return (
      <div className={`w-${width} h-${height} md:w-80 md:h-max m-2 border-black bg-orange-200 text-black border-2 p-4 self-center`}>

        <img src={`${image}`} className="border-2 border-black aspect-video" alt="Story Image" />
        
        
        <div className="text-2xl font-J1 pt-2">{title}</div>
        <div className="text-md font-MG font-semibold">(Published: {formatted_date})</div>
        
        <hr className="h-px mt-4 bg-black border-0 dark:bg-gray-700"></hr>
        
        <div className="text-xs italic m-1">Tags: 
          <button className="btn btn-primary m-1 btn-xs">Action</button>
          <button className="btn btn-secondary m-1 btn-xs">Sci-Fi</button> 
        </div>

        <br></br>

        
        <div className="text-lg">
          {content}
        </div>

        <br></br>

        <div className="text-emerald-600 underline"><a href={`${STORYPAGEURL}`}>Read More</a></div>

      </div>
  );
};


export default StoryCard