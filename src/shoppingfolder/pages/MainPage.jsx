import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Collections from '../components/Collections';
import Footer from '../components/Footer';
import WomanCollection from '../components/WomanCollection';
import Testimonials from '../components/Testimonials';
import FeaturedProducts from '../components/FeaturedProducts';
import BackToTopButton from '../components/BackToTopButton';

import { Gents, Ladies, TestimonialsData, FeaturedProducts as FeaturedProductsData } from '../data';

const MainPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.style.backgroundColor = isDarkMode ? '#fff' : '#121212';
        document.body.style.color = isDarkMode ? '#000' : '#fff';
    };

    return (
        <div>
            <Header />
            <button
                onClick={toggleDarkMode}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: isDarkMode ? '#f0f0f0' : '#333',
                    color: isDarkMode ? '#000' : '#fff',
                }}
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Banner />
            <FeaturedProducts products={FeaturedProductsData} />
            <Collections gentsFashion={Gents} />
            <WomanCollection ladiesFashion={Ladies} />
            <Testimonials data={TestimonialsData} />
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default MainPage;