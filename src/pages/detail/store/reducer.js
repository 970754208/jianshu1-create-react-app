import { fromJS } from 'immutable';

import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
});

const initDetail = (state, action) => {
    return state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content)
    })
}

export const reducer = (state = defaultState, action = {}) => {
    switch(action.type) {
        case constants.INITIALDETAIL:
            return initDetail(state, action);
        default:
            return state;
    }
}