import Startups from './Reducers/Startups'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
const ReduxStore = createStore(Startups, applyMiddleware(thunk))
export default ReduxStore