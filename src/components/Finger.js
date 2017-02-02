import React from 'react'


const BASE = 13
const SPACE = 58.333
export const STRINGS = ['e','a','d','g','b','e2']

const getFretPos = fret => {
  return BASE + SPACE * fret
}

export const findLowestFret = chord => {
  let lowest = 99
  for (var i = 0; i < STRINGS.length; i++) {
    var string = STRINGS[i]
    var fret = parseInt(chord[string])
    lowest = fret < lowest ? fret : lowest
  }
  console.log(lowest)
  return BASE + SPACE * lowest
}

const getStringPos = string => {
  const base = 0
  const space = 55
  switch (string) {
    case 'e':
      return base
    case 'a':
      return base + space
    case 'd':
      return base + space * 2
    case 'g':
      return base + space * 3
    case 'b':
      return base + space * 4
    case 'e2':
      return base + space * 5
    default:
      return base
  }
}

const Finger = (props) => (
  <div style={{
    position:'absolute',
    top: getFretPos(parseInt(props.fret)),
    left: getStringPos(props.string),
    width:26,
    height:26,
    borderRadius: 100,
    backgroundColor:'#00BCD4',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: -4,
    color: 'white',
    fontWeight: 'bold'
  }}>
    {parseInt(props.fret) + 1}
  </div>
)

export default Finger
