import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import UsersList from './components/UsersList.jsx';
import Logout from './components/Logout.jsx';
import Home from './components/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="register" element={<Register />} />
      <Route path="manager" element={<UsersList />} />
      <Route path="profile" element={<Profile />} />

      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFound />} />
    </Route>,
  ),
);

export default router;
