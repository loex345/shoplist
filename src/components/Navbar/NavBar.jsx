import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to='/list/dashboard'>Dashboard</Link>
      &nbsp; | &nbsp;
      <Link to='/list'>Print List</Link>
      &nbsp; | &nbsp;
      <Link to='/list/newItem'>Add List/Item </Link>
      &nbsp; | &nbsp;
      <Link to='/list/newList'>Add New List</Link>
      &nbsp; | &nbsp;
      Welcome, {user.name}
      &nbsp; | &nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}