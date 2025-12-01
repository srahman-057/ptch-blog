// Layout for individual Stories
import ContentImageLayout from "./ContentImageLayout";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength);
  } else {
    return str;
  }
}

const StoryLayout = (props) => {
  const { image, title, content, date, categoryArr, categoryMap } = props; // Destructure props for easier access
  const formatted_date = truncateString(date,10);
  var tagString = " ";

  console.log("Category:" + categoryArr);
  console.log("CategoryMap" + categoryMap);

  // Craft tagString using category information props
  categoryMap.forEach((value, key) => {
    for (let i = 0; i < categoryArr.length; i++) {
      if(categoryArr[i] == key) tagString += value + ", ";
      // console.log("Loop, i=" + i + "categoryArr[i]=" + categoryArr[i], ", Current categoryMap value: " + value);
    }
  });

  // Get rid of last ' ,' in the string
  tagString = truncateString(tagString, tagString.length -2);

  return (
    <div className="flex h-full justify-center">
      <div className="w-full h-full md:w-5/6 m-2 border-black bg-orange-200 text-black border-2 p-4 self-center"> 
        <img src={`${image}`} className="border-2 border-black object-contain md:hidden" alt="Story Image" />
        <div className="text-2xl font-J1 pt-2">{title}</div>
        <div className="text-md font-MG font-semibold">(Published: {formatted_date})</div>
        
        <hr className="h-px mt-4 bg-black border-0 dark:bg-gray-700"></hr>
        
        <div className="text-xs italic m-1">Tags: 
          {tagString}
        </div>

        <br></br>
        
        <article>
          {ContentImageLayout(1,"LEFT",image)}
          <p className="mb-4">{content}</p>
        </article>
        
      </div>
    </div>
  );
}

export default StoryLayout