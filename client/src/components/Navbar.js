import { NavLink } from "react-router-dom";
import { useAuthContext } from '../context/authContext';


const Navbar = () => {

  const { isAuthenticated, logout } = useAuthContext();

  return (
    <nav className=" bg-gray-200 border py-4"> 
      <ul className="flex justify-center items-center gap-4">
        <li className="hover:bg-gray-300 border rounded-md p-1">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/contact">Contact</NavLink>
        </li> */}
        {
          !isAuthenticated && (
            <li className="hover:bg-gray-300 border rounded-md p-1">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
                Contact
              </NavLink>
            </li>
          )
        }
        {
          isAuthenticated && (
            <li className="hover:bg-gray-300 border rounded-md p-1">
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
                Dashboard
              </NavLink>
            </li>
          )
        }
        {/* <li>
          <NavLink to="/login">Admin Login</NavLink>
        </li> */}
        {
          !isAuthenticated ? 
          (<li className="hover:bg-gray-300 border rounded-md p-1">
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : 'text-gray-700')}>
              Login
            </NavLink>
          </li>) 
          : 
          (<li className="hover:bg-gray-300 border rounded-md p-1">
            <button onClick={logout}>logout</button>
          </li>)
        }
      </ul>
    </nav>
  );
}

export default Navbar