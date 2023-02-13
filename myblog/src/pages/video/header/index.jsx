import React from 'react';

import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
const Index = () => {
    // const [data, changedata] = React.useState({}); //定义状态
    const navigate = useNavigate();
    const inputContent = React.useRef();
    function getdata() {
        const comtent = inputContent.current.value;
        axios({
            url: 'api1/api.php/provide/vod',
            method: 'post',
            data: {
                ac: 'videolist',
                wd: comtent
            }
        }).then((res) => {
            const newdata = res.data;
            console.log(newdata);
            navigate(`/text`, { state: { newdata } });
        });
    }
    return (
        <>
            <NavLink className='h-box'>
                <input type='text' ref={inputContent} />
                <button onClick={getdata}>搜索</button>
            </NavLink>
        </>
    );
};

export default Index;
