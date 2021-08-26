import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import '../components/styles/PageTop.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return ;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className ="page-top">
      <Header/>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {renderPage()}
      <Footer/>
    </div>
  );
}
