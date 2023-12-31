import { Link } from 'react-router-dom'
import * as userService from '../../../utilities/user-services'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      <Link to='/'>Main Page</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}