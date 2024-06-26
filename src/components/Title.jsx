import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Title = () => {
  return (
    <div className="h-18 flex w-full ">
      <Link to={'/'} className="flex w-full px-8 pt-4">
        <div className="lg:flex-2 flex w-full items-center gap-x-5">
          <img className="h-12 w-auto drop-shadow-md" src={logo} alt="" />
          <span className="text-lg text-black">Admin users</span>
        </div>
      </Link>
    </div>
  );
};
export default Title;
