import React, {createContext, useContext, useState} from 'react'
const imgpath = "https://image.tmdb.org/t/p/w500/"
export const MovieContext= createContext()

const OurContext = ({children}) => {
    const [movie, setMovie] = useState([])
    const [searchKey, setsearchKey] = useState('')
    const [movieSelected, setMovieSelected] = useState('')


  return (
    <MovieContext.Provider value={{movie, setMovie, searchKey,setsearchKey, movieSelected, setMovieSelected}}>
        {children}
        {/* <div style={{backgroundImage:`url(${imgpath}${movieSelected.backdrop_path}`, width:'100%', height: '40vh'}}>

          <div>
            <h1>{movieSelected.title}</h1>
            <p>{movieSelected.overview}</p>
          </div>

        </div> */}
    </MovieContext.Provider>
  )
}

export default OurContext