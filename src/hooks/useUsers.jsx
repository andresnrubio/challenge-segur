import { useEffect, useState } from 'react';
import usersData from '../data/users.json';
import useStore from '../store/store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useStorage from './useStorage';

const useUsers = () => {
  const users = usersData;
  const navigate = useNavigate();
  const { createUserAtStorage, getFromStorage } = useStorage();
  const {
    users: storeUsers,
    setLoggedUser,
    createUser,
    addFilterUsersByRole,
    addAllUsers,
  } = useStore((state) => ({
    users: state.users,
    addAllUsers: state.addAllUsers,
    setLoggedUser: state.setLoggedUser,
    addFilterUsersByRole: state.addFilterUsersByRole,
    createUser: state.createUser,
  }));

  if (storeUsers.length == 0) {
    addAllUsers(getFromStorage('users'));
  }

  const getMaxId = () => {
    return storeUsers.reduce((maxId, user) => {
      return user.id > maxId ? user.id : maxId;
    }, 0);
  };
  const [registerStatus, setRegisterStatus] = useState({});

  const registerNewUser = async (data) => {
    try {
      const userExists = storeUsers.find((user) => user.email === data.email);
      if (userExists) {
        setRegisterStatus({
          error: {
            message: 'Ya existe un registro con ese correo',
          },
        });
        toast.error('Ya existe un registro con ese correo');
        // throw new Error('Ya existe un registro con ese correo');
      }

      const nextId = getMaxId() + 1;
      const newUser = { ...data, id: nextId, role: 'consulta', profileImg: `https://robohash.org/${data.name}` };

      createUserAtStorage('users', newUser);

      await createUser(newUser);
      setLoggedUser(newUser);

      // toast.success('Usuario registrado correctamente');

      navigate('/manager');
    } catch (error) {
      throw error;
    }
  };

  return {
    users,
    registerNewUser,
    registerStatus,
  };
};

export default useUsers;
