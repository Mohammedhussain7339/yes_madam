import React from 'react'
import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddFacility from './component/AddFacility';
import AdminHome from './component/AdminHome';
import Userhome from './component1/Userhome';
import Mainpage from './component1/Mainpage';
import SpaCet from './component1/SpaCet';
import SpasubCat from './component1/SpasubCat';


function App() {
  return (
  <>
    {/* <Router >
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/SpaCet' element={<SpaCet />} />
        <Route path='/SpasubCat' element={<SpasubCat />} />
      </Routes>
    </Router> */}

  {/* <AdminHome/> */}
  {/* <Userhome/> */}
  <Mainpage/>
  </>
 )
}

export default App
