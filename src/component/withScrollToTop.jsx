import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function withScrollToTop(Component) {
  function ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
    return React.createElement(Component, props);
  }
  return ScrollToTop;
}

export default withScrollToTop;
