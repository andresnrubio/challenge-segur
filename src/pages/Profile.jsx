import React, { useState } from 'react';
import useStore from '../store/store';
import Modal from '../components/UserDetailModal';
import edit from '../assets/edit_light.png';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const { loggedUser } = useStore((state) => ({
    loggedUser: state.loggedUser,
  }));

  const handleEditUser = (user) => {
    setUser(user);
    setShowModal(!showModal);
  };

  return (
    <section className="flex w-full flex-col items-center">
      <div className="flex w-1/2 max-w-md flex-col items-center gap-2">
        <img
          src={loggedUser.profileImg}
          alt=""
          className="border-blue-linear border-1 h-auto w-24 rounded-full bg-blue-100 opacity-90 hover:opacity-100"
        />
        <div className="flex w-full gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
            <input
              type="text"
              value={loggedUser.name}
              disabled
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">Apelido</label>
            <input
              type="text"
              value={loggedUser.lastname}
              disabled
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Cod. Area</label>
            <input
              type="text"
              value={loggedUser.countryCode}
              disabled
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
            <input
              type="text"
              value={loggedUser.tel}
              disabled
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <input
            type="text"
            value={loggedUser.email}
            disabled
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">Rol</label>
          <input
            type="text"
            value={loggedUser.role}
            disabled
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button
        className="text-md mt-6 flex items-center gap-2 rounded-md bg-blue-action px-3 py-1.5 font-semibold tracking-wide text-white opacity-75 hover:bg-orange-700 hover:opacity-100"
        onClick={() => handleEditUser(loggedUser)}
      >
        <span>
          <img src={edit} alt="" className="h-6" />
        </span>
        Editar{' '}
      </button>
      {showModal && <Modal user={user} onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Profile;
