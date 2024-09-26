import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Optional for additional styling
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State variables to store the results
  const [result1, setResult1] = useState('');
  const [result2, setResult2] = useState('');
  const [result3, setResult3] = useState('');
  const [result4, setResult4] = useState('');
  const [result5, setResult5] = useState('');

  // Function to fetch data from the API and set the corresponding state
  const fetchData = async (endpoint, setResult) => {
    try {
      const response = await axios.get(endpoint);
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      console.error('Error fetching data:', error);
      setResult('Error fetching data');
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Netflix Data Analysis</h1>
      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <h3>Count Movies and TV Shows by Director</h3>
          <button
            className="btn btn-primary"
            onClick={() => fetchData('https://netflix-cleaning.xanderco.in/count_movies_tvshows_by_director', setResult1)}
          >
            Get Results
          </button>
          <pre>{result1}</pre>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Country with Highest Comedy Movies</h3>
          <button
            className="btn btn-primary"
            onClick={() => fetchData('https://netflix-cleaning.xanderco.in/country_with_highest_comedy_movies', setResult2)}
          >
            Get Results
          </button>
          <pre>{result2}</pre>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>Max Movies by Director Per Year</h3>
          <button
            className="btn btn-primary"
            onClick={() => fetchData('https://netflix-cleaning.xanderco.in/max_movies_by_director_per_year', setResult3)}
          >
            Get Results
          </button>
          <pre>{result3}</pre>
        </div>
        <div className="col-md-6 mb-4">
          <h3>Average Duration per Genre</h3>
          <button
            className="btn btn-primary"
            onClick={() => fetchData('https://netflix-cleaning.xanderco.in/average_duration_per_genre', setResult4)}
          >
            Get Results
          </button>
          <pre>{result4}</pre>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <h3>Directors with Both Horror and Comedy Movies</h3>
          <button
            className="btn btn-primary"
            onClick={() => fetchData('https://netflix-cleaning.xanderco.in/directors_horror_comedy_movies', setResult5)}
          >
            Get Results
          </button>
          <pre>{result5}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
