import React, { useState, useEffect } from 'react';
import '../App.css';
import Fallback from '../fallback.jpg'


function Events() {
  const[articles, setArticles] = useState([])
  const[currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchArticles()
  }, [currentPage])

  const fetchArticles = () => {
      
      fetch(`https://sv-reqres.now.sh/api/events?page=${currentPage}`).then(
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
    const events = articles.map((event) => {
      return (
      <article key={event.recid}>
        <button>Read More</button>
        <img src={event.mediaurl} onError={handleError}></img>
        <div>
          <p><b>{event.title}</b></p>
          <p>{event.description}</p>
        </div>
      </article>
    )
    })



  return(
    <div>
      <section className="container">
        {events}
      </section>
    </div>
  )
  }
}

export default Events;