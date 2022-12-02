import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'react-calendar/dist/Calendar.css';
import ContactCalendar from './components/ContactCalendar';
import Login from './components/Login/Login';
import useToken from './components/App/useToken';
import './App.css';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  // const [token, setToken] = useState();
  // const token = getToken();
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/">
            <ContactCalendar />
          </Route> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<ContactCalendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
