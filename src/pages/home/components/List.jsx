import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actionCreators'
import {
    ListWrapper,
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends Component {
    render() {
        let { articleList, page, isLoading, getMoreList } = this.props;
        return (
            <ListWrapper>
                {
                    articleList.toJS().map(item => {
                        return (
                            <Link to={"/detail/" + item.id} key={item.id}>
                                <ListItem>
                                    <img  className="pic" src={item.imgUrl} alt=""/>
                                    <ListInfo>
                                        <h3 className="title">{item.title}</h3>
                                        <p className="desc">{item.desc}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore 
                    onClick={()=>{getMoreList(isLoading, page)}}
                    className={isLoading? 'loading': ''}
                    >
                    {isLoading? '加载中...': '更多文字'}
                </LoadMore>
            </ListWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articleList: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage']),
        isLoading: state.getIn(['home', 'isLoading'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        getMoreList(isLoading, page) {
            if(isLoading) return;
            dispatch(actionCreators.getMoreList(page));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);