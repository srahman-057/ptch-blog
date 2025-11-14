// Handles individual stories
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StoryLayout from '../components/StoryLayout';

function StoryPage() {
      // Craft string for API Call
      const STORY_ID = useParams().id;``
      const FETCH_STRING = "https://ptch-blog-backend.vercel.app/api/stories/" + STORY_ID;

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
          <StoryLayout key={item.id} title={item.title} image={item.image} content={item.content} date={item.date}/>
      ))} 
    </div>
  )
}

export default StoryPage