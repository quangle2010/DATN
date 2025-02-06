import { Routes, Route } from 'react-router-dom';
import { ADMIN_ROUTER, User_Role_ROUTER, User_ROUTER, SELLER_ROUTER } from './utils/ConfigRouter';


import React from 'react';
import ProtectedRoute from './utils/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import SellerLayout from './layouts/SellerLayout';

function App() {

  return (
    <Routes>
      <Route path="/admin/*" element={
        <ProtectedRoute requiredRole={3} element={<AdminLayout />} />
      }>
        {ADMIN_ROUTER.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route path="/user/*" element={
        <ProtectedRoute requiredRole={1} element={<UserLayout />} />
      }>
        {User_Role_ROUTER.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
      <Route path="/seller/*" element={<ProtectedRoute requiredRole={2} element={<SellerLayout />} />}>
        {SELLER_ROUTER.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
      <Route path="/" element={<UserLayout />}>
        {User_ROUTER.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
