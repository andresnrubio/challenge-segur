import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import useCrypto from '../hooks/useCrypto';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      countryCode: '',
      tel: '',
    },
  });
  const { encryptedData, encryptAndSaveData, decryptData } = useCrypto();
  const secretKey = import.meta.env.VITE_REACT_APP_SECRET_KEY;

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-14 w-auto" src={logo} alt="Admin users" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registro</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit((data) => {
              console.log(data);
              encryptAndSaveData(data, secretKey);
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
                <p className="absolute mt-1 text-xs italic text-red-500">{errors.name?.message || ''}</p>
              </div>
              <div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
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
                  <p className="absolute mt-1 text-xs italic text-red-500">{errors.lastname?.message || ''}</p>
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
                <p className="absolute mt-1 text-xs italic text-red-500">{errors.area?.message || ''}</p>
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
                <p className="absolute mt-1 text-xs italic text-red-500">{errors.tel?.message || ''}</p>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </label>
              <input
                {...register('email', { required: 'Ingrese su correo electrónico' })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p className="absolute mt-1 text-xs italic text-red-500">{errors.email?.message || ''}</p>
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
                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="absolute mt-1 text-xs italic text-red-500">{errors.password?.message || ''}</p>
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
                  className="mt-2 block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="absolute mt-1 text-xs italic text-red-500">
                  {errors.passwordConfirmation?.message || ''}
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="hover:bg-indigo-500 mt-12 flex w-full justify-center rounded-md bg-blue-action px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Ya estas registrado?{' '}
            <Link to={'/login'} className="font-semibold leading-6 text-gray-500 hover:text-purple">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
