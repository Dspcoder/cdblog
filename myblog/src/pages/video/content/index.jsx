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
        console.log(list);
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
            url: '/api/api.php/provide/vod',
            method: 'post',
            data: {
                ac: 'videolist',
                wd: '海贼王'
            }
        }).then((res) => {
            console.log(res.data);
            this.setState({
                getdata: res.data
            });
        });
    };
}
