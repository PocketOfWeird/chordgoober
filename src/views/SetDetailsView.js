import React from 'react'
import { connect } from 'react-redux'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { removeSet } from '../actions'
import { getViewParams } from '../selectors'


const SetDetailsView = (props) => (
  <Card>
    <CardHeader
      title={props.setId}
    />
    <CardText>
      Set of pretty chord displays
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
