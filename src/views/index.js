import React from 'react'
import { connect } from 'react-redux'
import { isLoggedIn } from '../selectors'
import TitleBarView from './TitleBarView'
import ViewSwitcher from './ViewSwitcher'
import LoginView from './LoginView'


const RootView = (props) => (
  <div>
    {props.loggedIn ?
      <div>
        <TitleBarView />
        <ViewSwitcher />
      </div>
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
