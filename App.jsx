import React, { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import axios from 'axios';
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState([]);
  const [search,setSearch] = useState('');

const handleChange =  (moviename)=>{
 setSearch(moviename);

}

const fetchMovies = async () => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=4f00d8b4&s=${search}`);
    if (response.data && response.data.Search) {
      setMovies(response.data.Search);
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

 const handleSearch = () =>{
  fetchMovies(); 
  setSearch('')
 }
  
  

  return (
    <>
    <Search handleChange={handleChange} handleSearch={handleSearch} search={search}/>
      <div className='h-[100vh] w-[100%] 
      p-7 grid grid-cols-5 gap-3 mt-5  '>
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        ))}
      </div>
    </>
  );
}

export default App;
