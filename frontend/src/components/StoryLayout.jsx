// Layout for individual Stories

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength);
  } else {
    return str;
  }
}

// Layout for images in the body content
// function LeftImage(URL){
// return(
//   <img className="float-left w-1/2 pr-2 border-2 border-black" src={URL} />
// )
// }
// function RightImage(URL){
//   return(
//   <img className="float-right w-1/2 pr-2 border-2 border-black" src={URL} />
//   )
// }


const StoryLayout = (props) => {
  const { image, title, content, date, category, categoryMap } = props; // Destructure props for easier access
  const formatted_date = truncateString(date,10);
  //console.log(category);
  //console.log(categoryMap);

  return (

    <div className="flex h-full justify-center">
      <div className="w-full h-full md:w-5/6 m-2 border-black bg-orange-200 text-black border-2 p-4 self-center"> 
        <img src={`${image}`} className="border-2 border-black object-contain md:hidden" alt="Story Image" />
        <div className="text-2xl font-J1 pt-2">{title}</div>
        <div className="text-md font-MG font-semibold">(Published: {formatted_date})</div>
        
        <hr className="h-px mt-4 bg-black border-0 dark:bg-gray-700"></hr>
        
        <div className="text-xs italic m-1">Tags: 
          <button className="btn btn-primary m-1 btn-xs">Action</button>
          <button className="btn btn-secondary m-1 btn-xs">Sci-Fi</button> 
        </div>

        <br></br>
        
        <article>
          

          <p className="mb-4">{content}</p>
        </article>
      </div>
    </div>

  );
}

export default StoryLayout