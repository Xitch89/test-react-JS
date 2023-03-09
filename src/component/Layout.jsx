import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop';

class Layout extends Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
