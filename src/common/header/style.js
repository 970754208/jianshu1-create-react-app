import styled from 'styled-components';
import logo from '../../statics/imgs/nav-logo-4c7bbafe27adc892f3046e6978459bac.png';

export const HeaderWrapper = styled.div`
    position: relative;
    width: 1400px;
    height: 56px;
    border-bottom: 1px solid #f0f0f0; 
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    cursor: pointer;
    background: url(${logo});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    line-height: 56px;
`;

export const NavItem = styled.div`
    padding: 0 15px;
    font-size: 17px;
    &.left {
        float: left;
    };
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
    &.loginOut {
        cursor: pointer;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 11px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        &.focused {
            background-color: #969696;
            color: #fff;
            font-weight: bold;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 120px;
    padding: 12px 40px 12px 20px;
    margin-left: 18px;
    background: #eee;
    border-radius: 20px;
    outline: none;
    border: none;
    &::placeholder {
        color: #a3a3a3;
    }
    &.focused {
        width: 180px;
    }
    &.enter {
        transition: all 0.3s ease-out;
    }
    &.enter-active {
        width: 180px;
    }
    &.enter-done {
        width: 180px;
    }
    &.exit {
        transition: all 0.3s ease-out;
    }
    &.exit-active {
        width: 120px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 240px;
    padding: 0 20px;
    border: 1px solid #eee;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background-color: #fff;
    &::before {
        position: absolute;
        content: '';
        top: -10px;
        left: 38px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
    }
    &::after {
        content: '';
        clear: both;
    }
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #969696;
    line-height: 20px;
`;

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        transition: all .3s ease-out;
        transform-origin: center center;
    }
`;

export const SearchInfoItem = styled.div`
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 0 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    line-height: 20px;
    font-size: 12px;
    color: #787878;
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin: 9px 5px 0 15px;
    padding: 6px 20px;
    border: 1px solid #ea6f5a;
    background-color: transparent;
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    line-height: 24px;
    cursor: pointer;
    &.write {
        background-color: #ea6f5a;
        color: #fff;
    }
`;