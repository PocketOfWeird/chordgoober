import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from '../selectors'
import ViewSwitcher from './ViewSwitcher'
import LoginView from './LoginView'


const RootView = (props) => (
  <div>
    {props.loggedIn ?
      <ViewSwitcher />
      :
      <LoginView />
    }
  </div>
)

const mapStateToProps = state => ({
  loggedIn: isLoggedIn(state)
})

export default connect(
  mapStateToProps
)(RootView)
