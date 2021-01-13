import React, { Component } from 'react';
import {
    RefreshWrapper
} from './style';

export default class Refresh extends Component {
    rotate() {
        let originAngle = parseInt(this.spinIcon.style.transform.replace(/\D/g, ''), 10);
        if(originAngle) {
            originAngle += 360;
        } else {
            originAngle = 0;
        }
        this.spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
    }
    render() { 
        return (
            <RefreshWrapper onClick={this.rotate.bind(this)}>
                <span className="iconfont" ref={icon=>{this.spinIcon=icon}}>&#xe60f;</span>
                换一批
            </RefreshWrapper>
        )
    }
}