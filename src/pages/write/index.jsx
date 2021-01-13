import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends Component {
    render() {
        let { loginStatus } = this.props;
        return (
            loginStatus
            ? <div>
                <h3>写文章页面</h3>
            </div>
            : <Redirect to="/login" />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loginStatus: state.getIn(['login', 'loginStatus'])
    }
}

export default connect(mapStateToProps)(Write);