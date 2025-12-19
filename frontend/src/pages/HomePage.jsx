// Layout of Homepage

import StoryCard from "../components/StoryCard";
import { useState, useEffect } from 'react';

function HomePage() {
      // Init
      const VITE_API_URL = import.meta.env.VITE_API_URL; // URL of API Endpoint
      const getAllCategoriesURL = VITE_API_URL + "categories"; // Craft category API call

      // State management for story data
      const [storydata, setStoryData] = useState([]);
      const [storyloading, setStoryLoading] = useState(true);
      const [storyerror, setStoryError] = useState(null);

      // State management for category data
      const [categorydata, setCategoryData] = useState([]);
      const [categoryloading, setCategoryLoading] = useState(true);
      const [categoryerror, setCategoryError] = useState(null);

      const fetchAllStoryData = async () => {
        try {
          const storyresponse = await fetch(VITE_API_URL);
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

      fetchAllStoryData();
      fetchCategoryData();
    }, []); // Empty dependency array ensures this runs only once on mount

    if (storyloading) {
      // Add skeleton StoryCard here for loading display
      return(

        <div className="grid justify-center">
          <div className="text-2xl text-center font-MG font-bold"> Loading Story......</div> 

          <br></br> 

          <div className="flex flex-col w-full h-max md:w-80 md:h-max m-2 border-black bg-orange-200 text-black border-2 p-4 gap-4">
            <div className="skeleton h-32 w-full bg-orange-300 border-2 border-black rounded-none"></div>
            <div className="skeleton h-4 w-full bg-orange-300 border-2 border-black rounded-none"></div>
            <div className="skeleton h-4 w-3/4 bg-orange-300 border-2 border-black rounded-none"></div>
            <div className="skeleton h-4 w-full bg-orange-300 border-2 border-black rounded-none"></div>
          </div>
        </div>

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
          <StoryCard key={item.id} id={item.id} height={'max'} width={'3/4'} title={item.title} image={item.image} content={item.short_content} date={item.date} categoryArr={item.category} categoryMap={CATEGORYMAP}/>
      ))} 
    </div>
  )
}

export default HomePage