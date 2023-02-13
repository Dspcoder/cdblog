import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.scss';
export default function Content() {
    let location = useLocation();
    let T_newdata = location.state.newdata;

    return (
        <div>
            {T_newdata.list.map((item) => (
                <div key={item.vod_id}>
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
}
