import { ADD_STARTUP, GET_STARTUPS } from '../Actions'

function Startups(
  state = [],
  action
) {
  switch (action.type) {
    case GET_STARTUPS:
      return action.payload
    case ADD_STARTUP:
      return [...state, { text: action.payload, completed: false }]
    default:
      return state
  }
}

export default Startups