import React, { useEffect, useState } from 'react';
import useStore from '../store/store';
import UserDetailModal from '../components/UserDetailModal';
import ConfirmationModal from '../components/ConfirmActionModal';
import deleteIcon from '../assets/delete_light.png';
import editIcon from '../assets/edit_light.png';

const UsersManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [user, setUser] = useState(null);

  const {
    users: storeUsers,
    loggedUser,
    addFilterUsersByRole,
  } = useStore((state) => ({
    users: state.users,
    loggedUser: state.loggedUser,
    addFilterUsersByRole: state.addFilterUsersByRole,
  }));
  const handleEditUser = (user) => {
    setUser(user);
    setShowModal(!showModal);
  };
  const handleDeleteUser = (user) => {
    setUser(user);
    setShowConfirmationModal(!showConfirmationModal);
  };

  useEffect(() => {
    if (loggedUser) {
      addFilterUsersByRole();
    }
  }, [loggedUser]);

  return (
    <section className="flex flex-col">
      {loggedUser ? (
        <>
          <p className="text-sm opacity-60">Mostrando {storeUsers?.length} resultados </p>
          <ol className="ml-16 mt-2 grid w-full grid-cols-4-50px/3fr border-b border-gray-200 px-4 pb-2">
            <li></li>
            <li>Nombre / Rol</li>
            <li>Correo Electronico</li>
            <li>Telefono</li>
          </ol>
          {storeUsers?.map((user) => {
            return user.id !== loggedUser.id ? (
              <div className="flex items-center border-b border-gray-200  bg-light-purple" key={user.id}>
                <button
                  className="hover:bg-orange-700 mx-2 rounded-md bg-red-secondary px-1.5 py-1 text-xs font-bold text-white"
                  onClick={() => handleDeleteUser(user)}
                >
                  <img src={deleteIcon} alt="" className="h-5" />
                </button>
                <button
                  className="hover:bg-orange-700 rounded-md bg-blue-action px-1.5 py-1 text-xs font-bold text-white"
                  onClick={() => handleEditUser(user)}
                >
                  <img src={editIcon} alt="" className="h-5" />
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
            ) : (
              <></>
            );
          })}
        </>
      ) : (
        <h1>Debes iniciar sesion para acceder al gestor</h1>
      )}
      {showModal && <UserDetailModal user={user} onClose={() => setShowModal(false)} />}
      {showConfirmationModal && <ConfirmationModal user={user} onClose={() => setShowConfirmationModal(false)} />}
    </section>
  );
};

export default UsersManager;
