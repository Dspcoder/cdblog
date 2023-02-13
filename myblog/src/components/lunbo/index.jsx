import React, { Component } from 'react';
import { Carousel } from 'antd';

export default class index extends Component {
    render() {
        const contentStyle = {
            height: '460px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79'
        };

        return (
            <div>
                <Carousel effect='fade' autoplay={true} dotPosition={'top'}>
                    {this.state.arr.map((item) => (
                        <div key={item}>
                            <h3 style={contentStyle}>
                                <img src={item} alt='' />
                            </h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
    componentDidMount() {
        this.l_data();
    }
    state = { arr: [] };
    l_data = () => {
        if (this.props.lunbo1 !== undefined) {
            let arr = this.props.lunbo1;
            this.setState({ arr });
        }
    };
}
