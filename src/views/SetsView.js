import React from 'react'
import { connect } from 'react-redux'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import InsertFileIcon from 'material-ui/svg-icons/editor/insert-drive-file'


const SetsView = (props) => (
  <List>
    <ListItem
      primaryText='Add new set'
      rightIcon={<InsertFileIcon />}
      onTouchTap={props.handleNewSet}
    />
    <Divider />
    {props.sets &&
      props.sets.map((set, index) =>
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
)

const mapStateToProps = state => ({
  sets: state.user.sets
})

const mapDispatchToProps = dispatch => ({
  handleNewSet: e => console.log('Add new set'),
  handleSetDetails: index => e => console.log('Details of set', index)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetsView)
