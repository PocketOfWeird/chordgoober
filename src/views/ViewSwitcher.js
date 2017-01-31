import React from 'react'
import { connect } from 'react-redux'
import HomeView from './HomeView'


const ViewSwitcher = (props) => (
  <div>
    {props.currentView[0] === 'home' &&
      <HomeView />
    }
  </div>
)


const mapStateToProps = state => ({
  currentView: state.view.currentView
})

export default connect(
  mapStateToProps
)(ViewSwitcher)
