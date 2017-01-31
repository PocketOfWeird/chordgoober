import React from 'react'
import { connect } from 'react-redux'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back'
import { logout, setView, goBack } from '../actions'


const TitleBarView = (props) => (
  <AppBar
    iconElementLeft={props.currentView[0] !== 'home' &&
      <IconButton
        touch={true}
        onTouchTap={props.handleBack}
      >
        <ArrowBackIcon />
      </IconButton>
    }
    title='Chord Goober'
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton touch={true}>
            <MenuIcon />
          </IconButton>
        }
      >
        <MenuItem primaryText="My Sets" onTouchTap={props.handleSets} />
        <MenuItem primaryText="Logout" onTouchTap={props.handleLogout} />
      </IconMenu>
    }
    showMenuIconButton={props.currentView[0] !== 'home'}
    onTitleTouchTap={props.handleHome}
  />
)

const mapStateToProps = state => ({
  currentView: state.view[state.view.length - 1]
})

const mapDispatchToProps = dispatch => ({
  handleLogout: e => dispatch(logout()),
  handleSets: e => dispatch(setView(['sets'])),
  handleBack: e => dispatch(goBack()),
  handleHome: e => dispatch(setView(['home']))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBarView)
