// Layout of Homepage

import StoryCard from "../components/StoryCard";
import { useState, useEffect } from 'react';

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  } else {
    return str;
  }
}

function HomePage() {
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);


      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/stories');
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
        <div className={`flex flex-col w-3/4 h-max md:w-80 md:h-max m-2 border-black bg-orange-200 text-black border-2 p-4 place-self-center gap-4`}>
          <div className="skeleton h-32 w-full bg-orange-300 border-2 border-black rounded-none"></div>
          <div className="skeleton h-4 w-full bg-orange-300 border-2 border-black rounded-none"></div>
          <div className="skeleton h-4 w-3/4 bg-orange-300 border-2 border-black rounded-none"></div>
          <div className="skeleton h-4 w-full bg-orange-300 border-2 border-black rounded-none"></div>

        </div>
      </>
      ) 
    }

    if (error) {
      return 
      
      <p>Error: {error.message}</p>;
    }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.map((item) => (
          <StoryCard key={item.id} height={'max'} width={'3/4'} title={item.title} image={item.image} content={truncateString(item.content, 160)}/>
      ))} 
    </div>
  )
}

export default HomePage