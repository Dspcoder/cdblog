import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.scss';
export default function Content() {
    let location = useLocation();
    let T_newdata = location.state.newdata;
    const navigate = useNavigate();

    return (
        <div className='show-box'>
            {T_newdata.list.map((item) => (
                <div key={item.vod_id} onClick={() => GoDetails(item)}>
                    <div className='S-box'>
                        <img src={item.vod_pic} alt='' />
                        <div className='S-text'>
                            <h2>{item.vod_name}</h2>
                            <p className='vod_blurb'>简介：{item.vod_blurb}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
    function GoDetails(value) {
        navigate('/details', { state: { value } });
        console.log(111111111111111);
    }
}
