import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Register from './components/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="" element={<Home />} />
      <Route path="projects" element={<h1>projects</h1>} />
      <Route path="about" element={<h1>sobre mi</h1>} />
      <Route path="contact" element={<Contact />} /> */}
      //* Routes for unspecified routes URLs
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<h3>Page not Found</h3>} />
    </Route>,
  ),
);

export default router;
