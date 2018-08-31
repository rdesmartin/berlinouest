export const ActionTypes = {
  SET_POS: 'SET_POS',
  SET_SIDE: 'SET_SIDE',
  SET_LOCALE: 'SET_LOCALE',
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
	console.log("pos: " + JSON.stringify(pos));
	return { type: ActionTypes.SET_POS, pos }
}

export function setLocale(locale) {
	console.log("locale changed!: " + JSON.stringify(locale));
	return { type: ActionTypes.SET_LOCALE, locale }
}

export function setSide(side) {
  return { type: ActionTypes.SET_SIDE, side }
}
