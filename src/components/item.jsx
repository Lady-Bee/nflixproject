import React from 'react'
const imgpath = "https://image.tmdb.org/t/p/w500/"
const unavailable = "https://www.shutterstock.com/image-vector/unavailable-red-rubber-stamp-vector-260nw-1433120663.jpg"

const item = ({x}) => {
  return (
    <div style={{width:'200px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        <img width='200' src={x.poster_path ? `${imgpath}${x.poster_path}`:unavailable} alt="" />
        <div>
            <p style={{color:'white', textAlign:'center'}}>{x.title}</p>
            <main style={{display:'flex', justifyContent:'space-between', padding:'10px', alignItems:'center'}}>
                <span >{x.release_date}</span>
                <span style={{color:'white', backgroundColor:'green', padding:'10px', borderRadius:'10px' }} > {x.vote_average.toFixed(0)}</span>
            </main>
        </div>
    </div>
    
  )
}

export default item