import React, { PureComponent } from 'react';
import axios from 'axios';
import Videobox from '../../../components/videbox';
import './index.scss';
// import My from '../../my';
export default class index extends PureComponent {
    state = {
        getdata: {
            list: []
        }
    };
    render() {
        const { list } = this.state.getdata;

        return (
            <div className='c-box'>
                <Videobox className='c-v-box' list={list} />
            </div>
        );
    }
    componentDidMount() {
        this.getcontent();
    }
    getcontent = () => {
        axios({
            url: 'api2/v1/filter/list?catid=2&size=2&pageno=1&rank=ranklatest&cat=言情&area=内地&year=2022&act=杨幂', //v1/filter/list
            method: 'get'
            // data: {
            //     catid: '2', //catid 为电影类型例如：1电影、2电视剧、3动漫、4宗亿
            //     size: '2', //返回数据多少
            //     pageno: '1', //页数
            //     rank: 'ranklatest', //最新或最热
            //     cat: '言情', //类型
            //     area: '内地', //地区
            //     year: '2022', //年代
            //     act: '杨幂' //演员
            // }
        }).then((res) => {
            console.log('@res:', res);
        });
    };
}
