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
        console.log(JSON.stringify(result, null, 4))
        this.setState({
          data: result.data,
        })
      })
  }

  // 'data' is array of items

  render() {
    const { data } = this.state
    return (
      <div className="Grid">
        {/* // item is the item of 'data' array */}
        {data.map(item => {
          return <Card title={item.title} description={item.description} img={item.mediaurl} />
        })}
      </div>
    )
  }
}
export default Grid
