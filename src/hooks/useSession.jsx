import { useNavigate } from 'react-router-dom';
import useUsers from './useUsers';
import CryptoJS from 'crypto-js';
import useStore from '../store/store';

const useSession = () => {
  const { users } = useUsers();
  const navigate = useNavigate();
  const {
    users: storeUsers,
    setLoggedUser,
    addAllUsers,
    removeUser,
    loggedUser,
    addFilterUsers,
  } = useStore((state) => ({
    users: state.users,
    setLoggedUser: state.setLoggedUser,
    addAllUsers: state.addAllUsers,
    addFilterUsers: state.addFilterUsers,
    removeUser: state.removeUser,
    loggedUser: state.loggedUser,
  }));

  if (storeUsers.length == 0) {
    addAllUsers(users);
  }

  const login = (data) => {
    try {
      const user = storeUsers.find((user) => user.email === data.email);
      if (!user) {
        throw new Error('correoNoRegistrado');
      }

      if (user.password != data.password) {
        throw new Error('passwordIncorrecto');
      }
      // const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
      // localStorage.setItem('encryptedData', encryptedData);
      // setEncryptedData(encryptedData);

      setLoggedUser(user);
      addFilterUsers();
      navigate('/manager');
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
    removeUser(loggedUser.id);
  };

  return {
    login,
    logout,
  };
};

export default useSession;
