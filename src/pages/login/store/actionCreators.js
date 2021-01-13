import axios from 'axios';

import * as constants from './constants';

const changeLogin = () => ({
    type: constants.LOGININ,
    loginStatus: true
})

export const loginOut = () => ({
    type: constants.LOGINOUT,
    loginStatus: false
});

export const login = (account, password) => {
    return dispatch => {
        axios.get('/lf/jianshu/api/login.php?account=' + account + '&password=' + password)
            .then(res => {
                if(res.data.success) {
                    dispatch(changeLogin());
                } else {
                    alert('登录失败');
                }
            })
            .catch(error => {
                console.log(error.response.statusText);
            })
    }
}