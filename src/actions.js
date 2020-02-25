import {
	SET_ARTICLES, 
	SET_FILTER
} from './constants';

export const setArticles = (articles, category) => ({type: SET_ARTICLES, articles, category})

export const setFilter = filter => ({type: SET_FILTER, filter})