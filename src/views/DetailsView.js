import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash.map'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import PlayListAddIcon from 'material-ui/svg-icons/av/playlist-add'
import InsertFileIcon from 'material-ui/svg-icons/editor/insert-drive-file'
import Divider from 'material-ui/Divider'
import { setView } from '../actions'


const DetailsView = (props) => (
  <Card>
    <CardHeader
      title={props.chord.chord}
      subtitle={props.chord.modf}
    />
    <CardText>
      Pretty chord display
    </CardText>
    <CardActions>
      <IconMenu
      iconButtonElement={<IconButton><PlayListAddIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      {props.sets &&
        <div>
          {map(props.sets, (set, setIndex) =>
            <MenuItem
              key={setIndex}
              primaryText={set.name}
              onTouchTap={props.handleAddToSet(setIndex, props.chordIndex)}
            />
          )}
          <Divider />
        </div>
      }
      <MenuItem
        primaryText="Add to new set"
        rightIcon={<InsertFileIcon />}
        onTouchTap={props.handleAddToNewSet(props.chordIndex)}
      />
    </IconMenu>
    </CardActions>
  </Card>
)

const mapStateToProps = state => ({
  chordIndex: state.view[state.view.length - 1][1],
  chord: state.chords[state.view[state.view.length - 1][1]],
  sets: state.user.sets
})

const mapDispatchToProps = dispatch => ({
  handleAddToSet: (setIndex, chordIndex) => e => console.log('set',chordIndex,'to',setIndex),
  handleAddToNewSet: chordIndex => e => console.log('new set with', chordIndex)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsView)
