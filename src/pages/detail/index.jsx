import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './store/actionCreators';
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends Component {
    componentDidMount() {
        this.props.initDetail(this.props.match.params.page);
    }
    render() {
        let { title, content } = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content
                    dangerouslySetInnerHTML={{__html: content}}
                / >
            </DetailWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initDetail(id) {
            dispatch(actionCreators.initDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);