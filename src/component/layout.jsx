import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import ScrollToTop from './scrollToTop';

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
