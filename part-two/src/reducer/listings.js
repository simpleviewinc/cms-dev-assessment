export const listings = (state = { data:[] }, action) => {
  switch(action.type) {
    case 'SET_LISTINGS':
      return action.listings;
    default:
      return state;
  }
}