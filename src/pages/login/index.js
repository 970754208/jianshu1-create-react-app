import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actionCreators from './store/actionCreators';

import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends Component {
    render() {
        let { loginStatus, login } = this.props;
        return (
            !loginStatus
            ? <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" ref={input => {this.account = input}} />
                    <Input placeholder="密码" type="password" ref={input => this.password = input} />
                    <Button onClick={()=>login(this.account, this.password)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
            : <Redirect to="/" />
        ) 
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loginStatus: state.getIn(['login', 'loginStatus'])
    }
}

const mpaDispatchToProps = (dispatch, ownProps) => {
    return {
        login(accountElem, passwordElem) {
            dispatch(actionCreators.login(accountElem.value, passwordElem.value))
        }
    }
}

export default connect(mapStateToProps, mpaDispatchToProps)(Login);