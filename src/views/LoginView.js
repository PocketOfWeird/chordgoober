import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import LockOutlineIcon from 'material-ui/svg-icons/action/lock-outline'
import { login } from '../actions'


const styles = {
  height: '100%',
  textAlign: 'center',
  marginTop: '75%',
  fontFamily: 'Arial, Helvetica, sans-serif'
}

const LoginView = (props) => (
  <div style={styles}>
    <h3>Chord Goober</h3>
    <RaisedButton
      label='Sign In with Google'
      icon={<LockOutlineIcon />}
      onTouchTap={props.handleLogin}
      primary={true}
    />
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
