import { 
  SET_ARTICLES, 
  SET_FILTER 
} from './constants';

const initialStateData = {
    articles: [],
}

export const requestData = (state = initialStateData, action={}) => {
  switch (action.type) {
    case SET_ARTICLES:
      let newArticles = action.articles.map(article => {
          return {
              ...article,
              category: action.category
          };
      })
      return {
          ...state,
          articles: [...state.articles, ...newArticles]
      }
    default:
      return state;
  }
}

const initialStateToggle = {
    filter: "all",
}

export const setToggle = (state=initialStateToggle, action={}) => {
  switch (action.type) {
    case SET_FILTER:
      return {
                ...state,
                filter: action.filter
            }
    default:
      return state
  }
}