export const offers = (state = { data:[] }, action) => {
  switch(action.type) {
    case 'SET_OFFERS':
      return action.offers;
    default:
      return state;
  }
}