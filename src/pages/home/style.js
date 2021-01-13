import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner_img {
        width: 625px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    margin-left: 10px;
    height: 32px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-bottom: 18px;
    line-height: 32px;
    font-size: 14px;
    color: #000;
    .topic_pic {
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const MoreTopic = styled.div`
    float: left;
    margin-left: 10px;
    height: 34px;
    cursor: pointer;
    font-size: 14px;
    color: #666;
    line-height: 34px;
`;

export const ListWrapper = styled.div`

`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        float: right;
        width: 125px;
        height: 100px;
        border-redius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px 0;
    background-color: #5a5a5a;
    border-radius: 20px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    &.loading {
        background-color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
`;

export const RecommendItem = styled.div`
    height: 50px;
    background: url(${props => props.imgUrl});
    background-size: contain;
`;

export const AuthorWrapper = styled.div`
    margin-top: 10px;
`;

export const AuthorTop = styled.div`
    overflow: hidden;
    padding-top: 10px;
    color: #969696;
    font-size: 14px;
    .left {
        float: left;
    };
    .right {
        float: right;
    };
`;

export const AuthorItem = styled.div`
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    img {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border-radius: 24px;
    };
    .nickname {
        padding-top: 5px;
        font-size: 14px;
        line-height: 22px;
    }
    .follow {
        position: absolute;
        top: 5px;
        right: 0;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
    }
    .description {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;

export const FindMore = styled.div`
    padding: 7px;
    margin-top: 10px;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    line-height: 18px;
    font-size: 13px;
    color: #787878;
    text-align: center;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 20px;
    height: 15px;
    background-color: #333;
    cursor: pointer;
    &::before {
        position: absolute;
        content: '';
        top: -15px;
        left: -10px;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 15px solid #333;
    }
`;