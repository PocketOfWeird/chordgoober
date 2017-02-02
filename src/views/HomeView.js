import React from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite/build/react-infinite'
import TextField from 'material-ui/TextField'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import ChordBarWrapper from '../components/ChordBarWrapper'
import SetMenuView from './SetMenuView'
import { setFilter, clearFilter } from '../actions'
import { filterChords } from '../selectors'


const HomeView = (props) => (
  <div>
    <Card>
      <CardText>
        <TextField
          hintText='Search'
          value={props.chordFilter}
          fullWidth={true}
          onChange={props.handleSetFilter}
        />
      </CardText>
      {props.chordFilter &&
        <CardActions>
          <FlatButton
            label='Clear search'
            icon={<CloseIcon />}
            onTouchTap={props.handleClearFilter}
          />
        </CardActions>
      }
    </Card>
    <Divider />
    {props.chords.length === 0 &&
      <p>No chords found</p>
    }
    <Infinite containerHeight={800} elementHeight={72}>
      {props.chords.map((chord, index) =>
        <Card key={index}>
          <CardHeader
            title={chord.chord}
            subtitle={chord.modf}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <ChordBarWrapper chord={chord} />
          </CardText>
          <CardActions expandable={true}>
            <SetMenuView
              chordIndex={index}
            />
          </CardActions>
        </Card>
      )}
    </Infinite>
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
