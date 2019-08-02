import React, { Component } from 'react'
import List from './List'
import data from './data'
import './styles.css'
import shuffle from 'lodash/shuffle'

export default class App extends Component {
  state = { data }
  shuffle = () => this.setState(state => ({ data: shuffle(state.data) }))
  // componentDidMount() {
  //   setInterval(this.shuffle, 3000)
  // }
  render() {
    return (
      <List
        // className="main-list"
        items={this.state.data}
        keys={d => d.name}
        heights={d => 100 }
        config={{ mass: 4, tension: 100, friction: 40 }}>
        {item => (
           <div
          //  className="main-list-details"
           className="item"
           style={{ backgroundImage: item.css }}>
           <h1>{item.name}</h1>
         </div>
        )}
      </List>
    )
  }
}
