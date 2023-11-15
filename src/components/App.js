// create your App component here
import React, {useEffect, useState}from 'react'

function App() {
    const [dogImage, setDogImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  
    useEffect(() => {
      // Fetch transactions from your API endpoint
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((dogImage) => {
          setDogImage(dogImage.message);
        })
      .catch((error) => {
      console.error('Error fetching transactions:', error)
      setError(error.message);
    })
        .finally(() => {
          setLoading(false);
        });
      }, []);
  
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

  return (
    <div>
        <h1>Random Dog Image</h1>
      <img src={dogImage} alt="A Random Dog" />
        
      
    </div>
  )
}

export default App