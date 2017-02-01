import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash.map'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import PlayListAddIcon from 'material-ui/svg-icons/av/playlist-add'
import InsertFileIcon from 'material-ui/svg-icons/editor/insert-drive-file'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { newSetName, addToSet, makeNewSet, addToNewSet } from '../actions'


const SetMenuView = (props) => (
  <IconMenu
    iconButtonElement={<IconButton><PlayListAddIcon /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    {props.sets &&
      <div>
        {map(props.sets, (set, setId) =>
          <MenuItem
            key={setId}
            primaryText={setId}
            onTouchTap={props.handleAddToSet(setId, props.chordIndex)}
          />
        )}
        <Divider />
      </div>
    }
    {!props.makingNewSet &&
      <FlatButton
        label="Add to new set"
        icon={<InsertFileIcon />}
        onTouchTap={props.handleMakeNewSet}
        style={{marginTop:5}}
      />
    }
    {props.makingNewSet &&
      <div>
        <TextField
          value={props.newSetNameValue}
          floatingLabelText="New Set Name"
          onChange={props.handleNewSetName(props.sets)}
          style={{marginLeft:10, marginRight:10}}
        />
        <MenuItem
          primaryText='Save'
          onTouchTap={props.handleAddToNewSet(props.sets, props.chordIndex)}
        />
      </div>
    }
  </IconMenu>
)

const mapStateToProps = state => ({
  sets: state.user.sets,
  makingNewSet: state.set.makingNewSet,
  newSetNameValue: state.set.newSetName
})

const mapDispatchToProps = dispatch => ({
  handleAddToSet: (setId, chordIndex) => e => dispatch(addToSet(setId, chordIndex)),
  handleMakeNewSet: e => dispatch(makeNewSet()),
  handleAddToNewSet: (sets, chordIndex) => e => dispatch(addToNewSet(sets, chordIndex)),
  handleNewSetName: sets => e => dispatch(newSetName(sets, e))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetMenuView)
