import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import './shellBox.scss';
import Video from './pages/video';
import Music from './pages/music';
import My from './pages/my';
class ShellBox extends Component {
    render() {
        return (
            <div className='shellbox'>
                <Header />
                <div>
                    <Routes>
                        <Route path='/video' element={<Video />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/my' element={<My />} />
                        <Route path='/lx' element={<Video />} />
                        {/* <Navigate to='/' element={<Video />} /> */}
                    </Routes>
                </div>
            </div>
        );
    }
}

export default ShellBox;
