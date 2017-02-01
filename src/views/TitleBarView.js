import React from 'react'
import { connect } from 'react-redux'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back'
import { logout, changeCurrentView, goBack } from '../actions'
import { userHasSets, getCurrentView } from '../selectors'


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
        {props.hasSets &&
          <MenuItem primaryText="My Sets" onTouchTap={props.handleSets} />
        }
        <MenuItem primaryText="Logout" onTouchTap={props.handleLogout} />
      </IconMenu>
    }
    showMenuIconButton={props.currentView[0] !== 'home'}
    onTitleTouchTap={props.handleHome}
  />
)

const mapStateToProps = state => ({
  currentView: getCurrentView(state),
  hasSets: userHasSets(state)
})

const mapDispatchToProps = dispatch => ({
  handleLogout: e => dispatch(logout()),
  handleSets: e => dispatch(changeCurrentView(['sets'])),
  handleBack: e => dispatch(goBack()),
  handleHome: e => dispatch(changeCurrentView(['home']))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleBarView)
