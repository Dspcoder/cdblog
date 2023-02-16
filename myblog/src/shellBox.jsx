import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './components/header';
import { routeList } from './routes';
import Buttom from './components/buttom';
import './shellBox.scss';

const ShellBox = () => {
    let element = useRoutes(routeList);

    return (
        <div className='shellbox'>
            <Header />
            <div>{element}</div>
            <div>
                <Buttom />
            </div>
        </div>
    );
};

export default ShellBox;
