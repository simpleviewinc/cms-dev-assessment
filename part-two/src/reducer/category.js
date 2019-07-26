export const category = (state = 'all', action) => {
  switch(action.type) {
    case 'FILTER_CATEGORY':
      return action.category;
    default:
      return state;
  }
}