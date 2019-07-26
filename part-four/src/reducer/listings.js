export const listings = (state = [ [], [], [], [] ], action) => {
  switch(action.type) {
    case 'SET_LISTINGS':
      return action.listings;
    default:
      return state;
  }
}