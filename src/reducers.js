import { ActionTypes } from './actions'

const initialState = {
	pos: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_POS:
      const pos = action.pos // TO DO : Check if coordinates are valid with regex
      return {pos}
    default:
      return state;
  }
}

export default reducer;
