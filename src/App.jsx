import React, {useState} from 'react';
import './App.css';
import OurContext from './MovieContext';
import List from './components/List';
import Form from './components/Form';
import Banner from './components/Banner';

// const key = 'd2ca61025ad12230eb7e6b9403c69672'
// const key ='/movie?api_key=d2ca61025ad12230eb7e6b9403c69672&query='
// const url = "https://api.themoviedb.org/3/type/movie?api_key=d2ca61025ad12230eb7e6b9403c69672&query=terminator"
const imgpath = "https://image.tmdb.org/t/p/w500/"

function App() {
  const [dark,setDark] =useState('dark');
  return (
    <div className={dark}>
      <OurContext>
        <button onClick={() => setDark(dark === "dark" ? 'light': 'dark')} >{dark}</button>
        <Form />
        <Banner />
        <List />
      </OurContext> 
    </div>
   
  );
}

export default App;
