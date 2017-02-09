import React from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite/build/react-infinite'
import AutoComplete from 'material-ui/AutoComplete'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import ChordBar from '../components/ChordBar'
import SetMenuView from './SetMenuView'
import { setFilter, clearFilter } from '../actions'
import { filterChords } from '../selectors'


const HomeView = (props) => (
  <div>
    <AutoComplete
      hintText='Search'
      searchText={props.chordFilter}
      onUpdateInput={props.handleSetFilter}
      onNewRequest={props.handleSetCurrentChord}
      maxSearchResults={5}
      dataSource={props.chords.map((chord, index) => ({
        text: chord.chord + ' ' + chord.modf,
        value: { obj: chord, index: index }
      }))}
    />
    <ChordBar chord={props.currentChord.obj} />
    <SetMenuView
      chordIndex={props.currentChord.index}
    />
  </div>
)

const mapStateToProps = state => ({
  chords: filterChords(state),
  chordFilter: state.filter
})

const mapDispatchToProps = dispatch => ({
  handleSetFilter: e => dispatch(setFilter(e.target.value)),
  handleClearFilter: e => dispatch(clearFilter())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
