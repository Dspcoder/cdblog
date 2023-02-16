import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PubSub from 'pubsub-js';
import Videobox from '../../../components/videbox';
import './index.scss';

const Index = () => {
    const [getdata, setgetdata] = useState({ list: [] });
    const navigate = useNavigate();
    let a = 1;
    useEffect(() => {
        //挂载后
        getcontent();
    }, []);

    function getcontent() {
        axios({
            url: `api2/v1/filter/list?catid=${a}&size=18&pageno=1&rank=ranklatest`, //v1/filter/list
            method: 'get'

            /*data: {
                catid: '2', //catid 为电影类型例如：1电影、2电视剧、3动漫、4宗亿
                size: '2', //返回数据多少
                pageno: '1', //页数
                rank: 'ranklatest', //最新或最热
                cat: '言情', //类型
                area: '内地', //地区
                year: '2022', //年代
                act: '杨幂' //演员
            }*/
        }).then((res) => {
            if (res.status !== 200) {
                navigate('/error');
            } else {
                setgetdata({ list: res.data.data.movies });
                PubSub.publish('lbUrl', { urllist: res.data.data.movies });
            }
        });
    }

    return (
        <div className='c-box'>
            <h2 className='c-video-tj'>电影推荐</h2>
            <div className='c-v-box'>
                <Videobox list={getdata.list} />
            </div>
        </div>
    );
};
export default Index;
