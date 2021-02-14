import React, { useState, useEffect } from 'react';
import '../App.css';
import Fallback from '../fallback.jpg'


function Offers() {
  const[articles, setArticles] = useState([])
  const[currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchArticles()
  }, [currentPage])

  const fetchArticles = () => {
      
      fetch(`https://sv-reqres.now.sh/api/offers?page=${currentPage}`).then(
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
    const offers = articles.map((offer) => {
      return (
      <article key={offer.recid}>
        <button>Read More</button>
        <img src={offer.mediaurl} onError={handleError}></img>
        <div>
          <p><b>{offer.title}</b></p>
          <p>{offer.description}</p>
        </div>
      </article>
    )
    })



  return(
    <div>
      <section className="container">
        {offers}
      </section>
    </div>
  )
  }
}

export default Offers;