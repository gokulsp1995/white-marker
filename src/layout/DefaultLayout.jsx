import { Outlet } from 'react-router-dom';
import { Header, Footer, Scroll } from '../components';

const DefaultLayout = () => {
    return (
        <article className='app__layout'>
            <Header />
            <Outlet />
            <Scroll />
            <Footer />
        </article>
    );
}

export default DefaultLayout;