import logo from '../assets/logo.png';

const NotFound = () => {
  return (
    <div className="flex h-full w-full justify-center" style={{ backgroundImage: `url(${logo})` }}>
      <a>Regresar a inicio</a>
    </div>
  );
};

export default NotFound;
