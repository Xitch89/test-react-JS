import React, { Component } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./scrollToTop";

class Layout extends Component {
    render() {
        return (
            <>
                <ScrollToTop />
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }
}

export default Layout;