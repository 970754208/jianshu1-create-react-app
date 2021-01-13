import axios from 'axios'
import * as constants from './constants'

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_IN
})

export const mouseOut = () => ({
    type: constants.MOUSE_OUT
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return dispatch => {
        axios.get('/lf/jianshu/api/headerList.php')
            .then(res => {
                console.log(res)
                dispatch({
                    type: constants.INIT_HEADERLIST,
                    data: res.data.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}