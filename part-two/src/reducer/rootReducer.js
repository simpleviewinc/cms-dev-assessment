import { combineReducers } from 'redux';
import { listings } from './listings';
import { events } from './events';
import { offers } from './offers';
import { category } from './category';

export const rootReducer = combineReducers({
  listings,
  events,
  offers,
  category
})