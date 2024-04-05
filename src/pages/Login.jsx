import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import useCrypto from '../hooks/useCrypto';
import useSession from '../hooks/useSession';

// const secretKey = import.meta.env.VITE_REACT_APP_SECRET_KEY;

const Login = () => {
  const { encryptedData, encryptAndSaveData, decryptData } = useCrypto();
  const { login } = useSession();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-14 w-auto" src={logo} alt="Admin users" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicio de sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit((data) => {
              try {
                login(data);
                navigate('/', { replace: true });
              } catch (error) {
                if (error.message === 'correoNoRegistrado') {
                  setError('email', { message: 'El correo ingresado no se encuentra registrado' });
                } else if (error.message === 'passwordIncorrecto') {
                  setError('password', { message: 'Contraseña incorrecta' });
                }
              }
            })}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Correo electrónico
              </label>
              <div className="mt-2">
                <input
                  {...register('email', { required: 'Ingrese su correo electrónico' })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="absolute mt-1 text-xs italic text-red-500">{errors.email?.message || ''}</p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register('password', {
                    required: 'Complete el campo',
                    minLength: {
                      value: 8,
                      message: 'Contraseña incorrecta',
                    },
                    pattern: {
                      value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/,
                      message: 'Contraseña incorrecta',
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="absolute mt-1 text-xs italic text-red-500">{errors.password?.message || ''}</p>
            </div>

            <div>
              <button
                type="submit"
                className="hover:bg-indigo-500 mt-12 flex w-full justify-center rounded-md bg-blue-action px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesion
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            No estas registrado?{' '}
            <Link to={'/register'} className="font-semibold leading-6 text-gray-500 hover:text-purple">
              Crea tu cuenta
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
