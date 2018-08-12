export function setPosition(pos) {
  return {
    type: 'SET_POS',
    pos
  }
}

export function setSide(side) {
  return {
    type: 'SET_SIDE',
    side
  }
}

export const SET_POS = 'SET_POS';
export const SET_SIDE = 'SET_SIDE';

export const Sides = {
  EAST,
  WEST,
  UNKNOWN
};
