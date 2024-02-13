import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layout/DefaultLayout';

// Pages
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import CourseList from '../pages/course/CourseList';
import CourseDetail from '../pages/course/CourseDetail';
import Alumne from '../pages/alumne/Alumne';
import News from '../pages/news/News';
import NewsDetail from '../pages/news/NewsDetail';
import Album from '../pages/gallery/Album';
import Gallery from '../pages/gallery/Gallery';
import Portfolio from '../pages/portfolio/Portfolio';
import Profile from '../pages/profile/Profile';
import Course from '../pages/profile/Course';
import Registration from '../pages/registration/Registration';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/courses' element={<CourseList />} />
                <Route path='/courses/:id' element={<CourseDetail />} />
                <Route path='/alumne' element={<Alumne />} />
                <Route path='/news' element={<News />} />
                <Route path='/news/:id' element={<NewsDetail />} />
                <Route path='/gallery' element={<Album />} />
                <Route path='/gallery/:id' element={<Gallery />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/profile/:id' element={<Profile />} />
                <Route path='/profile/course' element={<Course />} />
                <Route path='/registration' element={<Registration />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;