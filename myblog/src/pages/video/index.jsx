import React, { PureComponent } from 'react';
import Header from './header';
import Content from './content';
import Lunbo from '../../components/lunbo';
import './index.scss';
export default class Video extends PureComponent {
    state = {
        lunbo1: [
            'http://img.movie.iecity.com/Upload/movie/202108/13/20210813105848362.jpg',
            'http://img.movie.iecity.com/Upload/movie/202212/16/20221216150555835.jpg',
            'http://img.movie.iecity.com/Upload/movie/202301/20/20230120184507303.jpg',
            'http://img.movie.iecity.com/Upload/movie/202302/07/20230207094622950.jpg',
            'http://img.movie.iecity.com/Upload/movie/202209/26/20220926151452926.jpg'
        ],
        lunbo2: [
            'http://img.movie.iecity.com/Upload/movie/202108/13/20210813105848362.jpg',
            'http://img.movie.iecity.com/Upload/movie/202212/16/20221216150555835.jpg',
            'http://img.movie.iecity.com/Upload/movie/202301/20/20230120184507303.jpg',
            'http://img.movie.iecity.com/Upload/movie/202302/07/20230207094622950.jpg'
        ]
    };
    render() {
        const { lunbo1, lunbo2 } = this.state;
        // console.log(lunbo1);
        return (
            <div className='v-box'>
                <Header />
                <div>
                    <Lunbo lunbo1={lunbo1} />
                </div>
                <Content />
                <div className='v-bottom'>
                    <Lunbo lunbo1={lunbo2} />
                </div>
                <div></div>
            </div>
        );
    }
}
