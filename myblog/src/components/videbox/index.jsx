import React, { Component } from 'react';
import './index.scss';
export default class index extends Component {
    render() {
        const { list } = this.props;
        return (
            <>
                {list !== []
                    ? list.map((item) => {
                          return (
                              //   <h2 key={item.vod_id}>{item.vod_name}</h2>
                              <div className='mapbox' key={item.vod_id}>
                                  <img src={item.vod_pic} alt='' />
                                  <h4>{item.vod_name}</h4>
                                  <p className='p-name'>类型：{item.vod_class}</p>
                              </div>
                          );
                      })
                    : '12333'}
            </>
        );
    }
}
