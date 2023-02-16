import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import './indexheader.scss';
export default class index extends PureComponent {
    render() {
        return (
            <div className='hh-box'>
                <div className='box'>
                    <div className='logci'>
                        <p>Welcome to my personal blog</p>
                    </div>
                    <ul>
                        <li>
                            <img
                                src='https://cdn.jsdelivr.net/gh/Dspcoder/img/app/cdblogimg/tubiaoimg/video.png'
                                alt=''
                            />
                            <NavLink to='/video'>影视</NavLink>
                        </li>
                        <li>
                            <img
                                src='https://cdn.jsdelivr.net/gh/Dspcoder/img/app/cdblogimg/tubiaoimg/music.png'
                                alt=''
                            />
                            <NavLink to='/music'>音乐</NavLink>
                        </li>
                        <li>
                            <img src='https://cdn.jsdelivr.net/gh/Dspcoder/img/app/cdblogimg/tubiaoimg/my.png' alt='' />
                            <NavLink to='/my'>个人</NavLink>
                        </li>
                        <li>
                            <img
                                src='https://cdn.jsdelivr.net/gh/Dspcoder/img/app/cdblogimg/tubiaoimg/l x.png'
                                alt=''
                            />
                            <NavLink to='/lx'>联系我</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
