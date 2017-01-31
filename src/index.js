import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from './store'
import { initializeStore } from './actions'
import RootView from './views'


injectTapEventPlugin()

let store = configureStore()
store.dispatch(initializeStore())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RootView />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
