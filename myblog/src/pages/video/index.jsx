import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
export default class Video extends Component {
    render() {
        return <div className='v-box'>video</div>;
    }
    get = () => {
        axios({
            ul: '',
            data: {}
        });
    };
}
