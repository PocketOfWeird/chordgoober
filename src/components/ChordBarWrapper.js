import React, { Component } from 'react'
import ChordBar from './ChordBar'
import { findLowestFret } from './Finger'


const styles = {
  width: 300,
  height: 350,
  overflow: 'scroll',
}

class ChordBarWrapper extends Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { chord } = this.props
    this.wrapperWindow.scrollTop = findLowestFret(chord)
  }
  render() {
    const { chord } = this.props
    return (
      <div style={styles} ref={div => { this.wrapperWindow = div }}>
        <ChordBar chord={chord} />
      </div>
    )
  }
}



export default ChordBarWrapper
