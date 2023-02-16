import { React } from 'react';
import Header from './header';
import Content from './content';
import Lunbo from '../../components/lunbo';
import './index.scss';

const Index = () => {
    return (
        <div className='v-box'>
            <div>
                <Header />
            </div>

            <Lunbo />

            <div>
                <Content />
            </div>
            <div>
                <Lunbo />
            </div>
            <div>
                <Content />
            </div>
            <div></div>
        </div>
    );
};

export default Index;
