import React from 'react';
import Shellbox from './shellBox.jsx';

export default function App() {
    const contentStyle = {
        // height: '460px',
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
        // backgroundColor: 'rgba(240, 248, 255, 0.864)'
        // border: '1px solid red'
    };
    return (
        <div style={contentStyle}>
            <Shellbox />
        </div>
    );
}
