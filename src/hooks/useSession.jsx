import { useState } from 'react';
import CryptoJS from 'crypto-js';
import useUsers from './useUsers';
import { useEffect } from 'react';

const useSession = () => {
  const [LoggedUser, setLoggedUser] = useState({});
  const { users } = useUsers();

  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     setIsLogged(true);
  //   }
  // }, []);

  // const toggleSession = () => {
  //   setIsLogged(!isLogged);
  // };

  const login = (data) => {
    try {
      const user = users.find((user) => user.email === data.email);

      if (!user) {
        throw new Error('correoNoRegistrado');
      }

      if (user.password != data.password) {
        throw new Error('passwordIncorrecto');
      }
      // const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
      // localStorage.setItem('encryptedData', encryptedData);
      // setEncryptedData(encryptedData);

      localStorage.setItem(
        'user',
        JSON.stringify({ name: user.name, lastname: user.lastname, role: user.role, img: user.profileImg }),
      );
      setLoggedUser({ name: user.name, lastname: user.lastname, role: user.role, img: user.profileImg });
    } catch (error) {
      console.log(error);
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
    setLoggedUser({});
    // toggleSession();
  };

  return {
    login,
    logout,
    LoggedUser,
  };
};

export default useSession;
