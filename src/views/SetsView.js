import React from 'react'
import { connect } from 'react-redux'
import map from 'lodash.map'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { changeCurrentView } from '../actions'


const SetsView = (props) => (
  <div>
    <List>
      {props.sets &&
        map(props.sets, (set, setId) =>
          <div>
            <ListItem key={setId}
              primaryText={setId}
              secondaryText={map(set, chord => chord.chord + ' ' + chord.modf + ',')}
              onTouchTap={props.handleSetDetails(setId)}
            />
            <Divider />
          </div>
      )}
    </List>
  </div>
)

const mapStateToProps = state => ({
  sets: state.user.sets
})

const mapDispatchToProps = dispatch => ({
  handleSetDetails: setId => e => dispatch(changeCurrentView(['setDetails',setId]))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetsView)
