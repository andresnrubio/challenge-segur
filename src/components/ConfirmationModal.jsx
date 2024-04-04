import { toast } from 'react-toastify';
import useStore from '../store/store';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const ConfirmationModal = ({ user, onClose }) => {
  const { users, updateUser, loggedUser, setLoggedUser, removeOneUser } = useStore((state) => ({
    users: state.users,
    updateUser: state.updateUser,
    loggedUser: state.loggedUser,
    setLoggedUser: state.setLoggedUser,
    removeOneUser: state.removeOneUser,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      tel: user.tel,
      countryCode: user.countryCode,
      role: user.role,
    },
  });
  const shouldUpdateLoggedUser = () => loggedUser.id === user.id;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('#modal-content')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen w-lvw content-center items-center justify-center px-4 pb-20 pt-4 text-center  sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          className="flex w-full transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          id="modal-content"
        >
          <form
            className="mb-4 w-4/5 space-y-6 p-4"
            onSubmit={handleSubmit(async (data) => {
              try {
                removeOneUser(user.id);
                toast.success('Usuario eliminado correctamente');
                onClose();
              } catch (error) {
                console.log(error);
              }
            })}
          >
            <img src="" alt="WARNING" />
            <h2 className="text-blue-linear mt-2 text-center text-2xl font-bold leading-9 tracking-tight">
              Esta seguro?
            </h2>
            <p className="text-sm">
              Esta por eliminar el usuario:{' '}
              <span className="text-lg font-semibold">
                {user.name} {user.lastname}
              </span>
            </p>
            <p className="block text-sm font-medium leading-6 text-gray-900">Esta accion no se puede deshacer</p>
            <div className="  grid grid-cols-2 gap-2 px-5">
              <button
                type="submit"
                className="hover:bg-soft-blue text-blue-linear mt-6 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancelar
              </button>
              <button
                className="mt-6 flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="button"
                onClick={onClose}
              >
                Eliminar usuario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
