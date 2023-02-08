import { Navigate } from 'react-router-dom';

import Video from '../../pages/video';

import Music from '../../pages/music';
import My from '../../pages/my';
const myroute = [
    {
        path: '/video',
        element: <Video />
    },
    {
        path: '/music',
        element: <Music />
    },
    {
        path: '/my',
        element: <My />
    },
    {
        path: '/',
        element: <Navigate to='video' />
    }
];
export default myroute;
