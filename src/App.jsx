import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex bg-soft-white ">
      <SideBar />
      <main className="container flex justify-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
