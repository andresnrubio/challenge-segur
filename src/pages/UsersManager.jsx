import React, { useState } from 'react';
// import users from '../data/users.json';
import useStore from '../store/store';
import Modal from '../components/Modal';
const UsersManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const { users: storeUsers, loggedUser } = useStore((state) => ({
    users: state.users,
    loggedUser: state.loggedUser,
  }));
  const handleEditUser = (user) => {
    setUser(user);
    setShowModal(!showModal);
  };
  return (
    <section className="flex flex-col">
      {loggedUser ? (
        <>
          <p className="text-sm opacity-60">Mostrando {storeUsers.length} resultados </p>
          <ol className="mt-2 grid w-full grid-cols-4-50px/3fr border-b border-gray-200 px-4 pb-2">
            <li></li>
            <li>Nombre / Rol</li>
            <li>Correo Electronico</li>
            <li>Telefono</li>
          </ol>
          {storeUsers.map((user) => (
            <div className="flex items-center border-b border-gray-200  bg-light-purple" key={user.id}>
              <button
                className="rounded-md bg-blue-action px-2 py-1.5 text-xs font-bold text-white hover:bg-orange-700"
                onClick={() => handleEditUser(user)}
              >
                Editar
              </button>
              <div className="align-center grid w-full grid-cols-4-50px/3fr p-4 text-sm">
                <img src={user.profileImg} alt="" className="h-10 w-auto self-center rounded-full bg-black" />
                <div className="flex">
                  <div>
                    <p className="text-md">
                      {user.name} {user.lastname}
                    </p>
                    <p className="text-xs font-medium italic">{user.role}</p>
                  </div>
                </div>
                <p>{user.email}</p>
                <p>
                  +{user.countryCode} {user.tel}
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1>Debes iniciar sesion para acceder al gestor</h1>
      )}
      {showModal && <Modal user={user} onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default UsersManager;
