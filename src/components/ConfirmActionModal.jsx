import { toast } from 'react-toastify';
import useStore from '../store/store';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import warning from '../assets/warning.png';
import useStorage from '../hooks/useStorage';

const ConfirmationModal = ({ user, onClose }) => {
  const { addAllUsers, users: storeUsers } = useStore((state) => ({
    users: state.users,
    addAllUsers: state.addAllUsers,
  }));
  const { removeUserAtStorage, getFromStorage } = useStorage();
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
            className="mb-4 flex w-full flex-col items-center p-4"
            onSubmit={handleSubmit(async (data) => {
              try {
                removeUserAtStorage('users', user.id);
                addAllUsers(getFromStorage('users'));
                toast.success('Usuario eliminado correctamente');
                onClose();
              } catch (error) {
                console.log(error);
              }
            })}
          >
            <img src={warning} alt="WARNING" className="h-auto w-24" />
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-blue-linear">Esta seguro?</h2>
            <p className="text-sm">
              Está por eliminar el usuario:{' '}
              <span className="underline-offset-3 text-lg font-semibold underline">
                {user.name} {user.lastname}
              </span>
            </p>
            <p className="block text-sm font-medium leading-6 text-gray-900 ">ESTA ACCION NO SE PUEDE DESHACER</p>
            <div className="  grid grid-cols-2 gap-2 px-5">
              <button
                type="button"
                onClick={onClose}
                className="mt-6 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-blue-linear hover:bg-soft-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancelar
              </button>
              <button
                className="mt-6 flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
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
