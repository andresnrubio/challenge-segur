import { Outlet } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  return (
    // <section className="h-screen max-h-svh w-full overflow-y-hidden">
    <section className="h-screen max-h-svh w-full">
      <Header />
      <section className="container mx-auto mt-8  justify-start overflow-y-auto">
        <Outlet />
      </section>
    </section>
  );
};

export default Main;
