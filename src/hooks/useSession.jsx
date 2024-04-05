import { useNavigate } from 'react-router-dom';
import useUsers from './useUsers';
import useStore from '../store/store';
import useStorage from './useStorage';
import { useEffect } from 'react';

const useSession = () => {
  const { saveAtStorage, getFromStorage } = useStorage();
  const users = getFromStorage('users');
  const navigate = useNavigate();
  const {
    users: storeUsers,
    setLoggedUser,
    addAllUsers,
    removeAllUsers,
    loggedUser,
    addFilterUsersByRole,
  } = useStore((state) => ({
    users: state.users,
    setLoggedUser: state.setLoggedUser,
    addAllUsers: state.addAllUsers,
    addFilterUsersByRole: state.addFilterUsersByRole,
    removeAllUsers: state.removeAllUsers,
    loggedUser: state.loggedUser,
  }));

  if (storeUsers.length == 0) {
    addAllUsers(users);
  }

  // useEffect(() => {
  //   const storage_users_data = getFromStorage('users');
  //   if (storage_users_data) {
  //     console.log('Hay data')
  //     addAllUsers(storage_users_data);
  //   } else {
  //     console.log('No hay data')
  //     console.log(storage_users_data)
  //     saveAtStorage('users', users);
  //     addAllUsers(users);
  //   }
  // }, []);

  const login = (data) => {
    try {
      const user = users.find((user) => user.email === data.email);
      if (!user) {
        throw new Error('correoNoRegistrado');
      }

      if (user.password != data.password) {
        throw new Error('passwordIncorrecto');
      }
      setLoggedUser(user);
      // saveAtStorage('users', storeUsers);
      // addFilterUsersByRole();
      navigate('/manager');
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const logout = () => {
    removeAllUsers();
    setLoggedUser(null);
  };

  return {
    login,
    logout,
  };
};

export default useSession;
