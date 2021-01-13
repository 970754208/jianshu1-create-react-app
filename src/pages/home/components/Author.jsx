import React, { Component } from 'react';
import { connect } from 'react-redux';

import Refresh from '../../../common/refresh';
import {
    AuthorWrapper,
    AuthorTop,
    AuthorItem,
    FindMore
} from '../style';

class Author extends Component {
    initAuthor() {
        let { authorList } = this.props;
        return (
            authorList.map(item => {
                let words = item.get('word_count');
                words = words > 999 ? (words / 1000).toFixed(1) + 'k' : words;
                let likes = item.get('likes_count');
                likes = likes > 999 ? (likes / 1000).toFixed(1) + 'k' : likes;
                return (
                <AuthorItem>
                    <img src={item.get('imgUrl')} alt=""/>
                    <p className="nickname">{item.get('nickname')}</p>
                    <p className="follow">+关注</p>
                    <p className="description">
                        写了 {words} 字 · {likes} 喜欢
                    </p>
                </AuthorItem>
                )
            })
        )
    }
    render() {
        let { authorList } = this.props;
        return (
            <AuthorWrapper>
                <AuthorTop>
                    <div className="left">推荐作者</div>
                    <div className="right">
                        <Refresh />
                    </div>
                </AuthorTop>
                {
                    authorList.size > 0
                    ? this.initAuthor()
                    : ''
                }
                <FindMore>
                    查看全部 &gt;
                </FindMore>
            </AuthorWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authorList: state.getIn(['home', 'authorList'])
    }
}

export default connect(mapStateToProps)(Author);