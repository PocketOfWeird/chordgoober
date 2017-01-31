import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'


const LoginView = (props) => (
  <div onClick={props.handleLogin}>
    Login
  </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  handleLogin: e => dispatch(login())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
