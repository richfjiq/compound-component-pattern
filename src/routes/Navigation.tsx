import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import ShoppingPage from '../component-patterns/pages/ShoppingPage';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="about"
          element={
            <Navbar>
              <h1>About Page</h1>
            </Navbar>
          }
        />
        <Route
          path="users"
          element={
            <Navbar>
              <h1>Users Page</h1>
            </Navbar>
          }
        />
        <Route
          path="shopping"
          element={
            <Navbar>
              <ShoppingPage />
            </Navbar>
          }
        />
        <Route path="/*" element={<Navigate to="/shopping" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
