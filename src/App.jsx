import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Routes from './routes/Routes';
import { ScrollTop, Loader } from './components';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Custom Style
import './theme/global.scss';

// AOS
import 'aos/dist/aos.css';

const App = () => {

    const { pathname } = useLocation();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 3000);
    }, [pathname]);

    return (
      <main className='app'>
          {isLoading && <Loader/>}
        <ScrollTop />
        <Routes />
      </main>
    );
}

export default App;