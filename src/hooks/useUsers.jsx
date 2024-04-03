import { useState } from 'react';
import usersData from '../data/users.json';

const useUsers = () => {
  const [users, setUsers] = useState(usersData);
  const [registerStatus, setRegisterStatus] = useState({});

  const registerNewUser = async (data) => {
    //* Se deberia trabajar con algun modelo?

    try {
      const userExists = users.find((user) => user.email === data.email);
      if (userExists) {
        console.log(users);
        setRegisterStatus({
          error: {
            message: 'Ya existe un registro con ese correo',
          },
        });
        throw new Error('Ya existe un registro con ese correo');
      }

      //* Genera un id unico - utilizo la busqueda del id mas alto generado y le sumo uno (en casos de BD el id seria proporcionado por el BE)
      const highestId = users.reduce((maxId, user) => {
        return user.id > maxId ? user.id : maxId;
      }, 0);

      setUsers([...users, { ...data, id: highestId + 1, role: 'consulta' }]);

      //* Se genera un inicio de sesion con el nuevo usuario
      localStorage.setItem('user', { name: data.name, lastname: data.lastname, role: data.role });
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
