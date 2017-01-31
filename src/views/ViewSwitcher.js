import React from 'react'
import { connect } from 'react-redux'
import HomeView from './HomeView'
import DetailsView from './DetailsView'
import SetsView from './SetsView'


const ViewSwitcher = (props) => (
  <div>
    {props.currentView[0] === 'home' &&
      <HomeView />
    }
    {props.currentView[0] === 'details' &&
      <DetailsView />
    }
    {props.currentView[0] === 'sets' &&
      <SetsView />
    }
  </div>
)


const mapStateToProps = state => ({
  currentView: state.view.currentView
})

export default connect(
  mapStateToProps
)(ViewSwitcher)
