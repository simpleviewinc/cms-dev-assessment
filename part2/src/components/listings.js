import React, { useState, useEffect } from 'react';
import '../App.css';
import Fallback from '../fallback.jpg'


function Listings() {
  const[articles, setArticles] = useState([])
  const[currentPage, setCurrentPage] = useState(1)

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


  if (articles.length < 20) {
      return (
          <div>
          </div>
      )
  }else{
    const listings = articles.map((listing) => {
      return (
      <article key={listing.recid}>
        <button>Read More</button>
        <img src={listing.mediaurl} onError={handleError}></img>
        <div>
          <p><b>{listing.title}</b></p>
          <p>{listing.description}</p>
        </div>
      </article>
    )
    })



  return(
    <div>
      <section className="container">
        {listings}
      </section>
    </div>
  )
  }
}

export default Listings;


