import { fromJS } from 'immutable';

import * as constants from './constants';

const defaultState = fromJS({
    loginStatus: false
})

export const reducer = (state = defaultState, action = {}) => {
    switch(action.type) {
        case constants.LOGININ:
            return state.set('loginStatus', true);
        case constants.LOGINOUT:
            return state.set('loginStatus', false);
        default:
            return state;
    }
}