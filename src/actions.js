export const ActionTypes = {
  SET_POS: 'SET_POS',
  SET_SIDE: 'SET_SIDE',
};

export const Sides = {
  EAST: 'EAST',
  WEST: 'WEST',
  UNKNOWN: 'UNKNOWN'
}

/*
 * action creators
 */

export function setPosition(pos) {
  return { type: ActionTypes.SET_POS, pos }
}

export function setSide(side) {
  return { type: ActionTypes.SET_SIDE, side }
}
