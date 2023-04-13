import { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const Navbar: FC<Props> = ({ children }) => {
  return (
    <div
      style={{ padding: 0, margin: 0, position: 'relative', height: '100vh' }}
    >
      <nav>
        <img src="vite.svg" alt="React Logo" height={100} width={100} />
        <ul>
          <li>
            <NavLink
              to="/shopping"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Shopping
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) => (isActive ? 'nav-active' : '')}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default Navbar;
