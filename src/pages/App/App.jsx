import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NewListPage from '../NewListPage/NewListPage';
import PrintListpage from '../PrintListPage/PrintListPage';
import NavBar from '../../components/Navbar/NavBar';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Dashboard from '../Dashboard/Dashboard';
import NewItemPage from '../NewItemPage/NewItemPage';
import * as shopitemsAPI from '../../utilities//shopitem-api';
import * as listsAPI from '../../utilities/list-api';
import ListUpdatePage from '../ListUpdatePage/ListUpdatePage';


export default function App() {
 const [user, setUser] = useState(getUser());
 const [shopItems, setShopItems] = useState([])
 const [lists, setLists] = useState([])

useEffect(function() { 
  async function getItems() {
      const shopItem = await shopitemsAPI.getAll();
      const lists = await listsAPI.getAll();
      setShopItems(shopItem);
      setLists(lists);
  }
  getItems();

 },[]);


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/list/newItem' element={<NewItemPage setShopItems={setShopItems}/>} />
            <Route path='/list/dashboard' element={<Dashboard user={user} shopItems={shopItems} lists={lists} setLists={setLists}/>} />
            <Route path='/list' element={<PrintListpage />} />
            <Route path='/list/newList' element={<NewListPage shopItems={shopItems} lists={lists} setLists={setLists} />} />
            <Route path='/list/:id' element={<ListUpdatePage lists={lists} setLists={setLists} shopItems={shopItems} user={user}/>} />
            <Route path='/*' element={<Navigate to='/list/dashboard'/>} />
          </Routes>
        </>
        :
        <LandingPage setUser={setUser} />
        
      }
    </main>
  );
}
