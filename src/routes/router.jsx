import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from '../screens/Homepage'
import PlaceToStay from '../screens/PlaceToStay'

const RouterLink = () => {
    return (
        <Router>
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/PlaceToStay' element={<PlaceToStay />} />
              {/* <Route path='*' element={<Error />} /> */}
          </Routes>
        </Router>
      );
};
export default RouterLink;