import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreators';
import { loginOut } from '../../pages/login/store/actionCreators';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from './style'

class Header extends Component {
    getItems() {
        let { focused, mouseIn, page, list, mouseEnter, mouseOut, changePage } = this.props;
        let newList = list.toJS();
        if(!newList.length) return;
        let pageList = [];
        for(let i = (page - 1) * 10; i < page * 10; i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={mouseEnter}
                    onMouseLeave={mouseOut}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={()=>{changePage(page, this.spinIcon)}}
                        >
                            <span className="iconfont spin" ref={icon=>{this.spinIcon=icon}}>&#xe60f;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    {pageList}
                </SearchInfo>
            )
        }
    }
    render() {
        let { focused, list, loginStatus, loginOut, searchFocus, searchBlur } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">
                        <span className="iconfont">&#xe610;</span>
                        首页
                    </NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        !loginStatus
                        ? <Link to="/login">
                            <NavItem className="right">登录</NavItem>
                        </Link>
                        : <NavItem className="right loginOut"
                            onClick={()=>loginOut()}
                        >
                            退出
                        </NavItem>
                    }
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={3000}
                            className="slide"
                        >
                            <NavSearch 
                                className={focused? 'focused': ''}
                                onFocus={()=>searchFocus(list)}
                                onBlur={()=>searchBlur()}
                            />
                        </CSSTransition>
                        <span className={focused? "iconfont focused zoom" : "iconfont zoom"}>&#xe64d;</span>
                        {this.getItems()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className="write">
                            <span className="iconfont">&#xe6e5;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        focused: state.getIn(['header', 'focused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        loginStatus: state.getIn(['login',  'loginStatus'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchFocus(list) {
            if(!list.toJS().length) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },
        searchBlur() {
            dispatch(actionCreators.searchBlur());
        },
        mouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        mouseOut() {
            dispatch(actionCreators.mouseOut());
        },
        changePage(page, spinIcon) {
            let originAngle = spinIcon.style.transform.replace(/\D/g,'');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            dispatch(actionCreators.changePage(page));
        },
        loginOut() {
            dispatch(loginOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);