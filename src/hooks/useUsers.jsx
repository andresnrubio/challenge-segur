import { useState } from 'react';
import usersData from '../data/users.json';
import useStore from '../store/store';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const useUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(usersData);
  const {
    users: storeUsers,
    setLoggedUser,
    createUser,
    addFilterUsersByRole,
  } = useStore((state) => ({
    users: state.users,
    setLoggedUser: state.setLoggedUser,
    addFilterUsersByRole: state.addFilterUsersByRole,
    createUser: state.createUser,
  }));

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
      setUsers([...users, newUser]);

      createUser(newUser);
      setLoggedUser(newUser);
      addFilterUsersByRole();

      toast.success('Usuario registrado correctamente');

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
