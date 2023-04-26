import React, {useContext, useState} from 'react'
import { MovieContext } from '../MovieContext'

const Form = () => {
    const {searchKey, setsearchKey}=useContext(MovieContext);
    const [watch, setWatch]=useState('');

 const handleSubmit=(e) => {
    e.preventDefault()
    setsearchKey(watch)
    setWatch('')
 }   
  return (
    <div style={{backgroundColor:'black', position:'sticky', zIndex:'30', top:'0px'}}>
        <nav style={{display: 'flex', justifyContent:'space-around', alignItems:'center'}}>
            <h1 style={{color:'white'}}><span style={{color:'red'}}>n</span>Flix</h1>
            <form action="" onSubmit={handleSubmit} style={{display:'flex'}}>

                <div style={{backgroundColor:'grey', padding:'8px', borderRadius:'10px'}}>
                 <input type="text" placeholder='Search Movie' value={watch} onChange={(e) => setWatch(e.target.value)} style={{outline:'none', border: 'none'}} />
                </div>
                 
                <button type="submit">Submit</button>            
            </form>
           
        </nav>

    </div>
  )
}

export default Form