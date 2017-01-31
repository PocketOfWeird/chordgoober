import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash.map'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InsertFileIcon from 'material-ui/svg-icons/editor/insert-drive-file'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { newSetName, newSetSave } from '../actions'


const SetsView = (props) => (
  <div>
    <List>
      {props.sets &&
        map(props.sets, (set, index) =>
          <div>
            <ListItem key={index}
              primaryText={set.name}
              secondaryText={set.chordsAsString}
              onTouchTap={props.handleSetDetails(index)}
            />
            <Divider />
          </div>
      )}
    </List>
    <Card>
      <CardHeader
        title='Add new set'
        avatar={<InsertFileIcon />}
        actAsExpander={true}
      />
      <CardText expandable={true}>
        <TextField
          floatingLabelText='Set Name'
          onChange={props.handleNewSetName}
        />
      </CardText>
      <CardActions expandable={true}>
        <RaisedButton
          label='save'
          onTouchTap={props.handleNewSetSave}
        />
      </CardActions>
    </Card>
  </div>
)

const mapStateToProps = state => ({
  sets: state.user.sets
})

const mapDispatchToProps = dispatch => ({
  handleNewSetName: e => dispatch(newSetName(e)),
  handleNewSetSave: e => dispatch(newSetSave()),
  handleSetDetails: index => e => console.log('Details of set', index)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetsView)
