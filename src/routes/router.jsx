import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from '../screens/Homepage'
import PlaceToStay from '../screens/PlaceToStay'
import ErrorPage from '../screens/ErrorPage';

const RouterLink = () => {
    return (
        <Router>
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/PlaceToStay' element={<PlaceToStay />} />
              <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      );
};
export default RouterLink;