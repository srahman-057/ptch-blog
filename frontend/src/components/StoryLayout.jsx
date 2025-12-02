// Layout for individual Stories
import ContentImageLayout from "./ContentImageLayout";
import parse from "html-react-parser";

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength);
  } else {
    return str;
  }
}

function evaluateContentString(content,contentImageArr){

  const replaceStr1 = ContentImageLayout(2,"RIGHT",contentImageArr[0]);
  const replaceStr2 = ContentImageLayout(2,"LEFT",contentImageArr[1]);

  const template = "RightImage1: %BODYIMAGE1%, LeftImage2: %BODYIMAGE2%";
  const replacements = { "%BODYIMAGE1%": replaceStr1, "%BODYIMAGE2%": replaceStr2};
  let result = content;

  for (const placeholder in replacements) {
    result = result.replace(new RegExp(placeholder, 'g'), replacements[placeholder]);
  } 

  // DEBUGGING:
    // console.log("replaceStr1: " + replaceStr1);
    // console.log("replaceStr2: " + replaceStr2);
    // console.log("RESULT: "+ result); // Output: "User: Eve, ID: 12345"

  return result;
}


const StoryLayout = (props) => {
  const { image, title, content, date, categoryArr, categoryMap, contentImageArr } = props; // Destructure props for easier access
  const formatted_date = truncateString(date,10);
  var tagString = " ";

  // DEBUGGING:
    // console.log("Category:" + categoryArr);
    // console.log("CategoryMap" + categoryMap);
    // console.log("ContentImageArr: " + contentImageArr[1]);

  // Craft tagString using category information props
  categoryMap.forEach((value, key) => {
    for (let i = 0; i < categoryArr.length; i++) {
      if(categoryArr[i] == key) tagString += value + ", ";
        // console.log("Loop, i=" + i + "categoryArr[i]=" + categoryArr[i], ", Current categoryMap value: " + value);
    }
  });

  // Get rid of last ' ,' in the string
  tagString = truncateString(tagString, tagString.length -2);

  // Insert HTML tags to the raw Content string
  const evaluatedString = evaluateContentString(content,contentImageArr);

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

          <div>
            {parse(temporaryString)}
          </div> 

        </article>
        
      </div>
    </div>
  );
}

export default StoryLayout