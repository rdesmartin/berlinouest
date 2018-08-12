import { ActionTypes } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_POS:
      const pos = action.pos // TO DO : Check if coordinates are valid with regex
      return [...state, pos]
    // case ActionTypes.SET_SIDE:
    //   return [...state, side: action.side]
    default:
      return state;
  }
}

export default reducer;
