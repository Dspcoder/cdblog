import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import Header from './header';
import Content from './content';
import './index.scss';
export default class Video extends PureComponent {
    render() {
        const contentStyle = {
            height: '460px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79'
        };
        return (
            <div className='v-box'>
                <Header />

                <div>
                    <Carousel effect='fade' autoplay={true} dotPosition={'top'}>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </div>

                <Content />
            </div>
        );
    }
}
