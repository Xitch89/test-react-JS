import React, { Component } from 'react';
import { 
  createHashRouter, createRoutesFromElements, Route, RouterProvider 
} from 'react-router-dom';
import Home from './component/Home/Home';
import Layout from './component/Layout';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Landing1 from './component/DetailedPage/LandingVr1';
import Landing2 from './component/DetailedPage/LandingVr2';
import Landing3 from './component/DetailedPage/LandingVr3';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="example-page/landing-vr1" element={<Landing1 />} />
      <Route path="example-page/landing-vr2" element={<Landing2 />} />
      <Route path="example-page/landing-vr3" element={<Landing3 />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

class App extends Component {
  render() {
    return (
      <RouterProvider router={router} />
    );
  }
}

export default App;
