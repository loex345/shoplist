import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewListPage from '../NewListPage/NewListPage';
import PrintListpage from '../PrintListPage/PrintListPage';
import NavBar from '../../components/Navbar/NavBar';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Dashboard from '../Dashboard/Dashboard';
import NewItemPage from '../NewItemPage/NewItemPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/list/newItem' element={<NewItemPage />} />
            <Route path='/list/dashboard' element={<Dashboard user={user}/>} />
            <Route path='/list' element={<NewListPage />} />
            <Route path='/list/newList' element={<PrintListpage />} />
            <Route path='/*' element={<Navigate to='/list/dashboard'/>} />
          </Routes>
        </>
        :
        <LandingPage setUser={setUser} />
        
      }
    </main>
  );
}
