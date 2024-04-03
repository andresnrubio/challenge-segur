import { useState } from 'react';
import CryptoJS from 'crypto-js';
import Login from '../components/Login';
import useUsers from './useUsers';

const useSession = () => {
  const [session, setSession] = useState(null);
  const { users } = useUsers();

  const login = (data) => {
    try {
      const user = users.find((user) => user.email === data.email);

      console.log(user);
      if (!user) {
        throw new Error('El correo ingresado no se encuentra registrado');
      }

      if (user.password != data.password) {
        throw new Error('Contraseña incorrecta');
      }
      // const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
      // localStorage.setItem('encryptedData', encryptedData);
      // setEncryptedData(encryptedData);

      localStorage.setItem('user', { name: user.name, lastname: user.lastname, role: user.role });
    } catch (error) {
      throw error;
    }
  };

  // const decryptData = (secretKey) => {
  //   const encryptedData = localStorage.getItem('encryptedData');
  //   if (encryptedData) {
  //     const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  //     const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //     return decryptedData;
  //   }
  //   return null;
  // };

  const logout = () => {
    localStorage.removeItem('user');
  };

  return {
    login,
    logout,
  };
};

export default useSession;
