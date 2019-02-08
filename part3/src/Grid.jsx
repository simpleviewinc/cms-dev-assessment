import React, { Component } from 'react'
import './Grid.css'
import Card from './Card'

class Grid extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = 'https://sv-reqres.now.sh/api/listings/'

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.data,
        })
      })
  }

  // filter functions for buttons -  bind functions to class w/ "functionName= () => { ... }"

  showAll = () => {
    const urlAll = 'https://sv-reqres.now.sh/api/listings/'

    fetch(urlAll)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.data,
        })
      })
  }

  showListings = () => {
    const urlListings = 'https://sv-reqres.now.sh/api/listings/'

    fetch(urlListings)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.data,
        })
      })
  }

  showEvents = () => {
    const urlEvents = 'https://sv-reqres.now.sh/api/events/'

    fetch(urlEvents)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.data,
        })
      })
  }

  showOffers = () => {
    const urlOffers = 'https://sv-reqres.now.sh/api/offers/?'

    fetch(urlOffers)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result.data,
        })
      })
  }

  // 'data' is array of items

  render() {
    const { data } = this.state
    return (
      <div>
        <div className="nav">
          <button type="button" onClick={this.showAll}>
            All
          </button>
          <button type="button" onClick={this.showListings}>
            Listings
          </button>
          <button type="button" onClick={this.showEvents}>
            Events
          </button>
          <button type="button" onClick={this.showOffers}>
            Offers
          </button>
        </div>
        <div className="Grid">
          {/* // item is the item of 'data' array */}
          {data.map(item => {
            return <Card title={item.title} description={item.description} img={item.mediaurl} />
          })}
        </div>
      </div>
    )
  }
}
export default Grid
