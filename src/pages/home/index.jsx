import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './store/actionCreators'
import Topic from './components/Topic';
import Recomment from './components/Recommend';
import List from './components/List';
import Author from './components/Author';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    backTop() {
        let i = 50;
        let goTop = () => {
            let scrollTop = document.documentElement.scrollTop;
            if(scrollTop > 0) {
                document.documentElement.scrollTop -= i;
                i = i*1.5;
                setTimeout(goTop, 10);
            }
        }
        goTop();
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeBackTopShow);
    }
    componentDidMount() {
        this.props.initList();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeBackTopShow)
    }
    render() {
        let { backTop } = this;
        let { showScroll } = this.props;
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img 
                            className="banner_img" 
                            src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""
                        />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recomment />
                        <Author />
                    </HomeRight>
                    {showScroll? <BackTop onClick={backTop}></BackTop>: null}
                </HomeWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initList() {
            dispatch(actionCreators.initList());
        },
        changeBackTopShow() {
            if(document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleShow(true));
            } else {
                dispatch(actionCreators.toggleShow(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)