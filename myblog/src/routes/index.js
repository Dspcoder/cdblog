import { Navigate } from 'react-router-dom';
import Video from '../pages/video';
import Music from '../pages/music';
import My from '../pages/my';
import ShowContent from '../components/showContent';

export const routeList = [
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
    },
    {
        path: '/text',
        element: <ShowContent />
    }
];
