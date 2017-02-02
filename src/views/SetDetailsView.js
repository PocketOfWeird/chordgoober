import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash.map'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import FlatButton from 'material-ui/FlatButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import ChordBarWrapper from '../components/ChordBarWrapper'
import { removeFromSet } from '../actions'
import { getViewParams } from '../selectors'


const SetDetailsView = (props) => (
  <Card>
    <CardHeader
      title={'Set: ' + props.setId}
    />
    <CardText>
      {map(props.set, (chord, index) =>
        <div key={index}>
          <h3>{chord.chord + ' ' + chord.modf}</h3>
          <ChordBarWrapper chord={chord} />
          <IconMenu
            iconButtonElement={<IconButton><CloseIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
          >
            <MenuItem
              primaryText='Remove Chord from Set'
              onTouchTap={props.handleRemoveFromSet(props.setId, index, chord)}
            />
          </IconMenu>
          <Divider />
        </div>
      )}
    </CardText>
    <CardActions>
      <FlatButton
        label='Delete Set'
        secondary={true}
        onTouchTap={props.handleDelete(props.setId)}
      />
    </CardActions>
  </Card>
)

const mapStateToProps = state => ({
  setId: getViewParams(state),
  set: state.user.sets[getViewParams(state)]
})

const mapDispatchToProps = dispatch => ({
  handleRemoveFromSet: (setId, index, chord) => e => {
    e.preventDefault()
    if (confirm('Are you sure you want to remove ' + chord.chord + ' ' + chord.modf + ' from ' + setId + '?')) {
      dispatch(removeFromSet(setId, index))
    }
  },
  handleDelete: setId => e => {
    e.preventDefault()
    if (confirm('Are you sure you want to delete ' + setId + '?')) {
      dispatch(removeSet(setId))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetDetailsView)
