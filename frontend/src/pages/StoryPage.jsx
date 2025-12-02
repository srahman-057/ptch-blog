// Handles individual stories
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoryLayout from '../components/StoryLayout';


function StoryPage() {
      // Craft string for API Call
      const STORY_ID = useParams().id;
      const VITE_API_URL = import.meta.env.VITE_API_URL; // URL of API Endpoint
      const STORY_FETCH_STRING = VITE_API_URL + STORY_ID; // Craft story API call
      const getAllCategoriesURL = VITE_API_URL + "categories"; // Craft category API call

      // State management for story data
      const [storydata, setStoryData] = useState([]);
      const [storyloading, setStoryLoading] = useState(true);
      const [storyerror, setStoryError] = useState(null);

      // State management for category data
      const [categorydata, setCategoryData] = useState([]);
      const [categoryloading, setCategoryLoading] = useState(true);
      const [categoryerror, setCategoryError] = useState(null);

      const fetchStoryData = async () => {
        try {
          const storyresponse = await fetch(STORY_FETCH_STRING);
          if (!storyresponse.ok) {
            throw new Error(`HTTP error! status: ${storyresponse.status}`);
          }
          const storyresult = await storyresponse.json();
          setStoryData(storyresult.data);
        } catch (storyerror) {
          setStoryError(storyerror);
        } finally {
          setStoryLoading(false);
        }
      };

      const fetchCategoryData = async () => {
        try {
          const categoryresponse = await fetch(getAllCategoriesURL);
          if (!categoryresponse.ok) {
            throw new Error(`HTTP error! status: ${categoryresponse.status}`);
          }
          const categoryresult = await categoryresponse.json();
          setCategoryData(categoryresult.data);
        } catch (categoryerror) {
          setCategoryError(categoryerror);
        } finally {
          setCategoryLoading(false);
        }
      };

    useEffect(() => {
      fetchStoryData();
      fetchCategoryData();
    }, []); // Empty dependency array ensures this runs only once on mount

    if (storyloading) {
      // Add skeleton StoryCard here for loading display
      return(
      <>  
        <div className="text-2xl text-center font-MG font-bold"> Loading Stories......</div> 

        <br></br> 

        <div className={`flex flex-col w-full h-max md:w-80 md:h-max m-2 border-black bg-orange-200 text-black border-2 p-4 place-self-center gap-4`}>
          <div className="skeleton h-32 w-full bg-orange-300 border-2 border-black rounded-none"></div>
          <div className="skeleton h-4 w-full bg-orange-300 border-2 border-black rounded-none"></div>
          <div className="skeleton h-4 w-3/4 bg-orange-300 border-2 border-black rounded-none"></div>
          <div className="skeleton h-4 w-full bg-orange-300 border-2 border-black rounded-none"></div>
        </div>
      </>
      ) 
    }

    if (storyerror) {
      return (
      <p>Error: {storyerror.message}</p>
      )
    }

    if (categoryerror) {
      return (
      <p>Error: {categoryerror.message}</p>
      )
    }  
  
    const CATEGORYMAP = new Map();
    categorydata.map((item) => {
      CATEGORYMAP.set(item.id, item.category); 
    });


  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {storydata.map((item) => (
          <StoryLayout key={item.id} title={item.title} image={item.image} content={item.content} date={item.date} categoryArr={item.category} categoryMap={CATEGORYMAP} contentImageArr={item.content_images}/>
      ))}
    </div>
  )
}

export default StoryPage