import React from 'react';
import Routes from './routes/Routes';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Bootstrap Styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Style
import './theme/global.scss';

const App = () => {
    return (
      <main className='app'>
        <Routes />
      </main>
    );
}

export default App;