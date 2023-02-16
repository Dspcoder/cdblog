import React from 'react';
import { message, Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.scss';

const Index = () => {
    // const [data, changedata] = React.useState({}); //定义状态
    const navigate = useNavigate();
    const inputContent = React.useRef();
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
            type: 'error',
            content: '输入内容不能为空！！'
        });
    };
    const getdata = () => {
        const comtent = inputContent.current.value;
        if (comtent === '') {
            success();
            // alert('不能为空');
        } else {
            axios({
                url: 'api1/api.php/provide/vod',
                method: 'post',
                data: {
                    ac: 'videolist',
                    wd: comtent
                }
            }).then((res) => {
                if (res.data.list.length !== 0) {
                    const newdata = res.data;
                    navigate('/showContent', { state: { newdata } });
                } else {
                    navigate('/NotFound');
                }
            });
        }
    };
    const cs = (value) => {
        if (value.key === 'Enter') {
            inputContent.current.value === '' ? getdata() : success();
        }
    };

    return (
        <>
            {contextHolder}
            <div className='h-box1'>
                <input type='text' ref={inputContent} onKeyUp={cs} />
                <Space>
                    <Button onClick={getdata}>搜索</Button>
                </Space>
            </div>
        </>
    );
};

export default Index;
