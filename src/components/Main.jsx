import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  return (
    <section className="h-vh h-screen max-h-svh w-full overflow-auto">
      <Header />
      <section className="container mx-auto mt-28  justify-start overflow-y-auto">
        <Outlet />
      </section>
    </section>
  );
};

export default Main;
