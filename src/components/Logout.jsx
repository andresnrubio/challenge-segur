import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSession from '../hooks/useSession';

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useSession();

  useEffect(() => {
    logout();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Sesion cerrada correctamente</h2>
    </div>
  );
};

export default Logout;
