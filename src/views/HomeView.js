import React from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

const HomeView = (props) => (
  <List>
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
