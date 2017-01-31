import React from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite/build/react-infinite'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { setView } from '../actions'


const HomeView = (props) => (
  <List>
    <Infinite containerHeight={800} elementHeight={72}>
    {props.chords.map((chord, index) =>
      <div>
        <ListItem key={index}
          primaryText={chord.chord}
          secondaryText={chord.modf}
          onTouchTap={props.handleDetails(index)}
        />
        <Divider />
      </div>
    )}
    </Infinite>
  </List>
)

const mapStateToProps = state => ({
  chords: state.chords
})

const mapDispatchToProps = dispatch => ({
  handleDetails: index => e => dispatch(setView(['details', index.toString()])),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
