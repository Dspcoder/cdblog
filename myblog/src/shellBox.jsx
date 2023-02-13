import React from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './components/header';
import { routeList } from './routes';
import './shellBox.scss';

const ShellBox = () => {
    let element = useRoutes(routeList);

    return (
        <div className='shellbox'>
            <div className='s-top'>
                <Header />
            </div>
            <div>{element}</div>
        </div>
    );
};

export default ShellBox;
