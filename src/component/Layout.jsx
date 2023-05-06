import React, {
  createContext, useState, useMemo, 
} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const ThemeContext = createContext(null);

function Layout() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);
  return (
    <ThemeContext.Provider value={contextValue}>
      <div id={theme}>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Outlet />
        <Footer theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
