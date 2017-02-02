import React from 'react'
import Finger, { STRINGS } from './Finger'


const styles = {
  wrapper: {
    position: 'relative',
    width: 300,
    height: 1167,
  },
  table: {
    width: 274,
    height: 1167,
    margin: '0 auto',
    borderTop: 'double #00BCD4',
    borderBottom: 'double #00BCD4',
    borderLeft: 'solid darkgray',
    borderRight: 'solid darkgray',
    borderCollapse: 'collapse'
  },
  data: {
    width: 70,
    borderTop: 'solid black',
    borderBottom: 'solid black',
    borderLeft: 'solid darkgray',
    borderRight: 'solid darkgray',
  }
}

let tds = []
for (var i = 0; i < 5; i++) {
  tds.push(<td style={styles.data}></td>)
}
let trs = []
for (var i = 0; i < 20; i++) {
  trs.push(<tr>{tds}</tr>)
}
const getFingers = chord => {
  let fingers = []
  for (var i = 0; i < STRINGS.length; i++) {
    var string = STRINGS[i]
    var fret = chord[string]
    if (fret !== 'x') {
      fingers.push(<Finger fret={fret} string={string} />)
    }
  }
  return fingers
}


const ChordBar = (props) => (
  <div style={styles.wrapper}>
    {getFingers(props.chord)}
    <table style={styles.table}>
      {trs}
    </table>
  </div>
)


export default ChordBar
