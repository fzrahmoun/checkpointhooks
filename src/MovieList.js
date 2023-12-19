import React, { useState } from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import _ from 'lodash';
import movieData from "./data"

function MovieList() {
  //useState hook for movies and new film also for filter
   const [movies,setMovies] = useState(movieData)

   const [newFilm,setNewFilm]= useState(
    {
      title:"",
      description:"",
      posterURL:"",
      rating:0
    }
   )

  let [filter,setFilter] = useState("");

//Function for new film to push the current inputs value to the newFilm useState hook

  const handleChange = (e) => {
    const {name, value} = e.target
    setNewFilm((prevMovie) => ({ ...prevMovie, [name]: value }));

  }
//Function for event onclick to add data from newfilm to movies and add unique id

  const handleAddMovie = () => {
        console.log(movies)
        console.log(newFilm)
         setMovies((prevMovies) => [
              ...prevMovies,
              { id: prevMovies.length + 1, ...newFilm },
            ]);
//Clear inputs after the movie had added 
          setNewFilm({
            title:"",
            description:"",
            posterURL:"",
            rating:0
          }  
          )

          }
//on change input filter the e target value will be the filter that we use on search
    const handleFilter = (e) => {
      setFilter(e.target.value)
      console.log(filter) 
    }


    //Function search by movie title or raiting if data result more than 0 if else alert Filter not found! will appear

    const handleSearch = () => {
      //make title on lower case to compare it with input filter
      const filtredMovies = movies.filter(movie => _.toLower(movie.title) === _.toLower(filter) )
     //parse ti integer the input value to compare it with movies raiting 
      const filterAsNumber = parseInt(filter); 
      const filtredMoviesTwo = movies.filter(movie => parseInt(movie.rating)  === filterAsNumber)

      if(filtredMovies.length > 0 ){
        setMovies(filtredMovies)
      }
      
     else if(filtredMoviesTwo.length > 0 ){
        setMovies(filtredMoviesTwo)
      }
      else{
        alert('Filter not found!');

      }

    }

    console.log('Movies in MovieList:', movies);

  return (
      <div>
        {/*Form to add movie*/}
        <form>
          <input type='text' placeholder='Title' name="title" value={newFilm.title} onChange={handleChange}/>
          <input type='text' placeholder='Description' name="description" value={newFilm.description} onChange={handleChange}/>
          <input type='text' placeholder='PosterURL' name="posterURL" value={newFilm.posterURL} onChange={handleChange}/>
          <input type='number' placeholder='Rating' name="rating" value={newFilm.rating} onChange={handleChange}/>
          <button type="button" onClick={handleAddMovie} style={{backgroundColor:'#e50914',color:'white',borderColor:"#e50914"}}>Add film</button>
        </form>

        {/*Component filter with parameters*/}
        <Filter filter={filter} handleFilter={handleFilter} handleSearch={handleSearch} />


          <div className='row'>

        {/*Map to show all data from movies*/}   

              {movies.map(movie =>
              
                  <div key={movie.id} className='col-md-6'>
                   {/*Component MovieCard */}
                     <MovieCard  id={movie.id} title={movie.title} description={movie.description} posterURL={movie.posterURL} rating={movie.rating}/>
                   
                  </div>
              
              )
              }

         
          </div>



      </div>
  )
}

export default MovieList