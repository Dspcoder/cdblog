import React, { Component } from 'react';
import './index.scss';

import PubSub from 'pubsub-js';
export default class index extends Component {
    state = { arr2: [] };
    render() {
        // const { urllist } = this.state.arr2;
        return (
            <div className='L-box'>
                <img
                    id='lunbo-img'
                    src='https://gd-hbimg.huaban.com/d83c886d452b81e97e580ca3db09afaa45b64e342dee0-TzQbfs_fw1200webp'
                    alt=''
                />
            </div>
        );
    }
    componentDidMount() {
        PubSub.subscribe('lbUrl', (_, data) => {
            this.setState({ arr2: data });
        });
    }
}
