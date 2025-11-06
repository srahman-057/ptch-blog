// Layout of Homepage

import StoryCard from "../components/StoryCard";
import { useState, useEffect } from 'react';

//const STORIES = http://localhost:3000/api/stories;

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
          console.log(result);
          //console.log(result.data[1].title)
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
      return <p>Loading stories...</p>;
    }

    if (error) {
      return <p>Error: {error.message}</p>;
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