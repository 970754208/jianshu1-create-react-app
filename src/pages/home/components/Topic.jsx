import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
    MoreTopic
} from '../style'

class Topic extends Component {
    showTopic() {
        let { topicList } = this.props;
        let newList = topicList.toJS().map(item => {
            return (
                <TopicItem key={item.id}>
                    <img 
                        className="topic_pic"
                        src={item.imgUrl}
                    />
                    {item.title}
                </TopicItem>
            )
        })
        return newList;
    }
    render() {
        return (
            <TopicWrapper>
                {
                    this.showTopic()
                }
                <MoreTopic>
                    更多热门专题 &gt;
                </MoreTopic>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
}

export default connect(mapStateToProps)(Topic);