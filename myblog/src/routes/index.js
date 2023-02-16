import { Navigate } from 'react-router-dom';
import Video from '../pages/video';
import Music from '../pages/music';
import My from '../pages/my';
import ShowContent from '../components/showContent';
import DetailsPage from '../components/detailsPage';
import Error from '../components/error';
import NotFound from '../components/NotFound';

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
        path: '/showContent',
        element: <ShowContent />
    },
    {
        path: '/details',
        element: <DetailsPage />
    },
    {
        path: '/error',
        element: <Error />
    },
    {
        path: '/NotFound',
        element: <NotFound />
    }
];
