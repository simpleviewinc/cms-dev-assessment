import React, { useState, useEffect } from 'react';
import './App.css';
import Fallback from './fallback.jpg'


function App() {
  const[articles, setArticles] = useState([])
  const[currentPage, setCurrentPage] = useState(1)
  const[currentGrid, setCurrentGrid] = useState(1)
  const[isShuffled, setIsShuffled] = useState(false)

  useEffect(() => {
    fetchArticles()  
  }, [currentPage])

  const fetchArticles = () => {
      
      fetch(`https://sv-reqres.now.sh/api/listings?page=${currentPage}`).then(
        res => {
          if (res.status !== 200) {
            console.warn("Warning: Something is wrong with the app.");
            return;
          } 
          res.json().then(data => {
            setArticles([...articles, ...data.data])
            if (currentPage < 4){
            setCurrentPage(currentPage + 1)
            }
          })
        }
      )
}

const handleError = (ev) => {
  ev.target.src = Fallback
}

const handleBack = () => {
    if (currentGrid == 1){
      setCurrentGrid(5)
    }else{
      setCurrentGrid(currentGrid - 1)
    }
}

const handleNext = () => {
  if (currentGrid == 5){
    setCurrentGrid(1)
  }else{
    setCurrentGrid(currentGrid + 1)
  }
}

const shuffle = (array) => {
  if(!isShuffled){
  var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;  
  }
  setIsShuffled(true)
  return array;
  }
  else{
    return array}
}

  if (articles.length < 20) {
      return (
          <div>
              <h1>Loading!</h1>
          </div>
      )
  }else{
    const shuffled = shuffle(articles)
    console.log(shuffled)
    const listings = shuffled.map((listing, index) => {
      let num = `0${index+1}.`;
      return (
      <article key={listing.recid}>
        <img src={listing.mediaurl} onError={handleError}></img>
        <div className="details">
          <p class="num">{num}</p>
          <p><b>{listing.title}</b></p>          
        </div>
        <div class="description">
          <p>{listing.description}</p>
        </div>
        
      </article>
    )
    })



  return(
    <div>
      {currentGrid == 1 ? 
      <section className="grid grid1">
        {listings.slice(0,5)}
      </section>
      : null}
      {currentGrid == 2 ? 
      <section className="grid grid2">
        {listings.slice(5,10)}
      </section>
      : null}
      {currentGrid == 3 ? 
      <section className="grid grid3">
        {listings.slice(10,13)}
      </section>
      : null}      
      {currentGrid == 4 ? 
        <section className="grid grid4">
          {listings.slice(13,15)}
        </section>
        : null}
      {currentGrid == 5 ? 
      <section className="grid grid1">
        {listings.slice(15,20)}
      </section>
      : null}
      <section className="buttons">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </section>
    </div>
  )
  }
}

export default App;
