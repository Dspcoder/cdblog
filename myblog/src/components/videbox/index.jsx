import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.scss';

const Index = (props) => {
    const navigate = useNavigate();
    const { list } = props;
    const goThisPage = (id) => {
        const { list } = props;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                const name = list[i].title;
                axios({
                    url: 'api1/api.php/provide/vod',
                    method: 'post',
                    data: {
                        ac: 'videolist',
                        wd: name
                    }
                }).then((res) => {
                    if (res.data.list.length !== 0) {
                        const newdata = res.data;

                        navigate('/showContent', { state: { newdata } });
                    } else {
                        navigate('/NotFound');
                    }
                });
            }
        }
        navigate('/');
    };

    return (
        <>
            {list !== []
                ? list.map((item) => {
                      return (
                          <div onClick={() => goThisPage(item.id)} className='mapbox' key={item.id}>
                              <img src={item.cdncover} alt='' />
                              <h4>{item.title}</h4>
                              <p className='p-name'>类型：{item.moviecategory}</p>
                          </div>
                      );
                  })
                : '12333'}
        </>
    );
};

export default Index;
