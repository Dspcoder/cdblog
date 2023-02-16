import React from 'react';
import { useLocation } from 'react-router-dom';
// import { Pagination } from 'antd';
import './index.scss';
const Index = () => {
    let location = useLocation();
    let value = location.state.value;
    console.log(value);
    let url = changetpye(value.vod_play_url);
    // const itemRender = (_, type, originalElement) => {
    //     if (type === 'prev') {
    //         return <a>上一页</a>;
    //     }
    //     if (type === 'next') {
    //         return <a>下一页</a>;
    //     }
    //     return originalElement;
    // };
    function changetpye(value) {
        let newvalue = value.split('#');
        for (var i = 0; i < newvalue.length; i++) {
            // console.log(newvalue[i]);
            newvalue[i] = newvalue[i].split('$');
        }
        return newvalue;
    }
    return (
        <>
            <div className='D-box1'>
                <img src={value.vod_pic} alt='' />
                <div className='D-textContent-box'>
                    <h2>{value.vod_name}</h2>
                    <p>年份：{value.vod_year}年</p>
                    <p>作家：{value.vod_writer}</p>
                    <p>最新：{value.vod_remarks}</p>
                    <p>最新更新时间：{value.vod_time}</p>
                    <p>类型：{value.type_name}</p>
                    <p>简介：{value.vod_blurb}</p>
                </div>
            </div>
            <div className='D-box2'>
                {url.map((item) => (
                    <div className='D-map-box' key={item[1]}>
                        <a href={item[1]}>{item[0]}</a>
                    </div>
                ))}
                {/* <Pagination total={500} itemRender={itemRender} /> */}
            </div>
        </>
    );
};

export default Index;
