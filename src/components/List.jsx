import React, {useContext, useEffect} from 'react'
import { MovieContext } from '../MovieContext'
import Item from './item'


const url = "https://api.themoviedb.org/3/"
const key ='/movie?api_key=d2ca61025ad12230eb7e6b9403c69672&query='

const List = () => {
const {movie, setMovie, searchKey, setSearchKey, movieSelected,  setMovieSelected}= useContext
    (MovieContext)

    useEffect(() => {
        const adaApi = async () => {
            const type = searchKey ? 'search': 'discover'
            const response = await fetch(`${url}${type}${key}${searchKey}`)
            const data = await response.json()
            setMovie(data.results)
            setMovieSelected(data.results[0])

            console.log(data.results)
        }
        adaApi()
    }, [movie, setMovie])
  return (
    <div style={{display: 'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {movie.map((x)=>(
            <Item key={x.id}x={x}/>
        ))}
    </div>
  )
}

export default List