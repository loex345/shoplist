import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "../Navbar/NavBar.css"

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar navbar-expand-lg justify-content-center">
      <Link to='/list/dashboard' className="btn btn-outline-primary">Dashboard</Link>
      &nbsp; | &nbsp;
      <Link to='/list/newItem' className="btn btn-outline-primary">Add List/Item </Link>
      &nbsp; | &nbsp;
      <Link to='/list/newList' className="btn btn-outline-primary">Add New List</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut} className="btn btn-outline-primary">Log Out</Link>
    </nav>
  );
}