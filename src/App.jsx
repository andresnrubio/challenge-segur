import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex bg-soft-white ">
      <SideBar />
      <main className="container mx-auto h-dvh justify-start overflow-y-auto py-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
