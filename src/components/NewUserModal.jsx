import { toast } from 'react-toastify';
import useStore from '../store/store';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import useUsers from '../hooks/useUsers';

const UserDetailModal = ({ onClose }) => {
  const { loggedUser } = useStore((state) => ({
    loggedUser: state.loggedUser,
  }));
  const { registerNewUser } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      tel: '',
      countryCode: '',
      role: 'consulta',
      password: '',
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
    <div className="fixed inset-0 z-30 overflow-y-auto">
      <div className="flex min-h-screen w-lvw content-center items-center justify-center px-4 pb-20 pt-4 text-center  sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          className="flex w-full transform place-content-center overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          id="modal-content"
        >
          <form
            className="w-4/5 space-y-6 p-4"
            onSubmit={handleSubmit(async (data) => {
              try {
                const userData = {
                  name: data.name,
                  lastname: data.lastname,
                  email: data.email,
                  password: data.password,
                  countryCode: data.countryCode,
                  tel: data.tel,
                };
                const newUser = await registerNewUser(userData);
                onClose();
              } catch (error) {
                console.log(error);
              }
            })}
          >
            <div className="flex justify-between">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre
                </label>
                <input
                  {...register('name', { required: 'Ingrese su nombre' })}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className=" mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className=" mt-1 text-xs italic text-red-500">{errors.name?.message || ''}</p>
              </div>
              <div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium leading-6 text-gray-900">
                    Apellido
                  </label>
                  <input
                    {...register('lastname', { required: 'Ingrese su apellido' })}
                    id="lastname"
                    name="lastname"
                    type="text"
                    autoComplete="family-name"
                    className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className=" mt-1 text-xs italic text-red-500">{errors.lastname?.message || ''}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <label htmlFor="countryCode" className="block text-sm font-medium leading-6 text-gray-900">
                  Cod. area{' '}
                </label>
                <input
                  {...register('countryCode', { required: '' })}
                  id="countryCode"
                  name="countryCode"
                  type="countryCode"
                  placeholder="54"
                  autoComplete="tel-country-code"
                  className="mt-2 block w-20 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className=" mt-1 text-xs italic text-red-500">{errors.area?.message || ''}</p>
              </div>
              <div className="w-full">
                <label htmlFor="tel" className="block text-sm font-medium leading-6 text-gray-900">
                  Número de telefono
                </label>
                <input
                  {...register('tel', { required: 'Ingrese su número de telefono' })}
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="tel-national"
                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className=" mt-1 text-xs italic text-red-500">{errors.tel?.message || ''}</p>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </label>
              <input
                {...register('email', {
                  required: 'Ingrese su correo electrónico',
                })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className=" mt-1 text-xs italic text-red-500">{errors.email?.message || ''}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Contraseña
                  </label>
                </div>
                <input
                  {...register('password', {
                    required: 'Complete el campo',
                    minLength: {
                      value: 8,
                      message: 'La contraseña debe tener mínimo 8 caracteres',
                    },
                    pattern: {
                      value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/,
                      message:
                        'Por seguridad la contraseña debe incluir al menos una mayúscula, una minúscula y un número',
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-2 block rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className=" mt-1 text-xs italic text-red-500">{errors.password?.message || ''}</p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="passwordConfirmation" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirma contraseña
                  </label>
                </div>
                <input
                  {...register('passwordConfirmation', {
                    validate: (value) => {
                      return value === watch('password') || 'La contraseña no coincide';
                    },
                  })}
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  className="mt-2 block rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className=" mt-1 text-xs italic text-red-500">{errors.passwordConfirmation?.message || ''}</p>
              </div>
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                Role
              </label>
              <select
                {...register('role', {
                  required: 'Please select a role',
                })}
                disabled={loggedUser.role !== 'admin'}
                id="role"
                name="role"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="admin">Admin</option>
                <option value="consulta">Consulta</option>
                <option value="vendedor">Vendedor</option>
                <option value="gerente">Gerente</option>
                <option value="atencionalcliente">Atención al cliente</option>
              </select>
              <p className=" mt-1 text-xs italic text-red-500">{errors.role?.message || ''}</p>
            </div>
            <div className=" grid grid-cols-2 gap-2 px-5">
              <button
                type="submit"
                className="hover:bg-indigo-500 mt-6 flex w-full justify-center rounded-md bg-blue-action px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear Usuario
              </button>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
