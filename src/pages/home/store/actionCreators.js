import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (res) => ({
    type: constants.INIT_HOMELIST,
    topicList: res.data.data.topicList,
    articleList: res.data.data.articleList,
    recommendList: res.data.data.recommendList,
    authorList: res.data.data.authorList
});

const addArticleList = (list, nextPage) => ({
    type: constants.ADDARTICLELIST,
    list,
    nextPage
});

const inLoading = () => ({
    type: constants.INLOADING
});

const outLoading = () => ({
    type: constants.OUTLOADING
});

export const initList = () => {
    return dispatch => {
        axios.get('/lf/jianshu/api/home.php')
            .then(res => {
                dispatch(changeHomeData(res))
            })
            .catch(error => {
                console.dir(error)
            })
    }
};

export const getMoreList = page => {
    return dispatch => {
        dispatch(inLoading());
        const nextPage = page + 1;
        axios.get('/lf/jianshu/api/articleList.php?page=' + nextPage)
            .then(res => {
                dispatch(addArticleList(res.data.data, nextPage));
                dispatch(outLoading());
            })
            .catch(error => {
                console.log(error.response.data);
                dispatch(outLoading());
            })
    }
};

export const toggleShow = (state) => ({
    type: constants.TOGGLESHOW,
    state: state
})