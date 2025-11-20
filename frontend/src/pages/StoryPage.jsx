// Handles individual stories
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoryLayout from '../components/StoryLayout';

// Category Map
async function populateCategoryMap() {
  const getAllCategoriesURL = import.meta.env.VITE_API_URL + "categories";

  try {
      const response = await fetch(getAllCategoriesURL); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // API returns JSON
      const categoryArr = data.data;
      
      // Populate the map
      const categoryMap = new Map();
      categoryArr.forEach(item => {
        categoryMap.set(item.id, item.category); 
      });

      return categoryMap;

  } catch (error) {
      console.error("Error fetching or processing data:", error);
      return null;
  }
}

function StoryPage() {
      // Craft string for API Call
      const STORY_ID = useParams().id;
      const VITE_API_URL = import.meta.env.VITE_API_URL; // URL of API Endpoint
      const FETCH_STRING = VITE_API_URL + STORY_ID;

      //const CATEGORYMAP = populateCategoryMap();
      //console.log(CATEGORYMAP);

      populateCategoryMap().then((result) => {
        console.log(result); // "Data fetched successfully!"
        // You can pass this 'result' to another function here
        //processData(result);
      }).catch((error) => {
        console.error("Error:", error);
      });


      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      const fetchData = async () => {
        try {
          const response = await fetch(FETCH_STRING);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setData(result.data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
      fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

    if (loading) {
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

    if (error) {
      return (
      <p>Error: {error.message}</p>
      )
    }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.map((item) => (
          <StoryLayout key={item.id} title={item.title} image={item.image} content={item.content} date={item.date} category={item.category} categoryMap={CATEGORYMAP}/>
      ))} 
    </div>
  )
}

export default StoryPage