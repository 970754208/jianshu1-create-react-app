import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
})

const change_page = (state, action) => {
    if(action.page === state.get('totalPage')){
        return state.set('page', 1);
    }else{
        return state.set('page', action.page + 1)
    }
}

const init_headerList = (state, action) => {
    const data = fromJS(action.data);
    return state.merge({
        list: data,
        totalPage: Math.ceil(data.size / 10 )
    })
}

export const reducer = (state = defaultState, action = {}) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.MOUSE_IN:
            return state.set('mouseIn', true);
        case constants.MOUSE_OUT:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            return change_page(state, action);
        case constants.INIT_HEADERLIST:
            return init_headerList(state, action);
        default:
            return state;
    }
}