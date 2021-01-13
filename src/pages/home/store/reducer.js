import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    isLoading: false,
    showScroll: false,
    authorList: []
})

const initHomeList = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        authorList: fromJS(action.authorList)
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.list)),
        articlePage: action.nextPage
    })
}

export const reducer = (state=defaultState, action={}) => {
    switch(action.type) {
        case constants.INIT_HOMELIST:
            return initHomeList(state, action);
        case constants.ADDARTICLELIST:
            return addArticleList(state, action);
        case constants.INLOADING:
            return state.set('isLoading', true);
        case constants.OUTLOADING:
            return state.set('isLoading', false);
        case constants.TOGGLESHOW:
            return state.set('showScroll', action.state);
        default:
            return state;
    }
};