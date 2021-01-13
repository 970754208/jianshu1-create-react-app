import axios from 'axios';

import * as constants from './constants';

const getDetail = data => ({
    type: constants.INITIALDETAIL,
    title: data.title,
    content: data.content
})

export const initDetail = (id) => {
    return dispatch => {
        axios.get('/lf/jianshu/api/detail.php?page=' + id)
            .then(res => {
                dispatch(getDetail(res.data.data))
            })
    }
}