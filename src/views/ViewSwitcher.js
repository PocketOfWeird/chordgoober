import React from 'react'
import { connect } from 'react-redux'
import HomeView from './HomeView'
import SetsView from './SetsView'
import SetDetailsView from './SetDetailsView'
import { getCurrentView } from '../selectors'


const ViewSwitcher = (props) => (
  <div>
    {props.currentView[0] === 'home' &&
      <HomeView />
    }
    {props.currentView[0] === 'sets' &&
      <SetsView />
    }
    {props.currentView[0] === 'setDetails' &&
      <SetDetailsView />
    }
  </div>
)


const mapStateToProps = state => ({
  currentView: getCurrentView(state)
})

export default connect(
  mapStateToProps
)(ViewSwitcher)
