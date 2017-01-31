import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import localStore from './local'
import firebase_on from './firebase_on'
import firebase_once from './firebase_once'
import firebase_update from './firebase_update'
import viewMiddleware from './viewMiddleware'


const logger = createLogger({collapsed: true})

const configureMiddleware = () => applyMiddleware(
  thunk,
  localStore,
  firebase_on,
  firebase_once,
  firebase_update,
  viewMiddleware,
  logger
)

export default configureMiddleware
export { hydrateState } from './local'
