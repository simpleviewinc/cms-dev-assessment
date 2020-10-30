/**
 * Top-level state
 * when changed decides how to re-render the app
 */
function createStore(initialState, reducer) {
  let id = 0;
  let state = initialState;
  let subscriptions = new Map();

  function getState() {
    return state;
  }

  function subscribe(callback) {
    id += 1;
    subscriptions.set(id, callback);
    return () => {
      subscriptions.delete(id);
    }
  }

  function dispatch(action) {
    const prevState = { ...state };
    state = reducer(state, action);
    for (const subscription of subscriptions.values()) {
      subscription(state, prevState);
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}