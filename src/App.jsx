import { useEffect } from 'react';
import Main from './components/Main';
import SideBar from './components/SideBar';
import users from './data/users.json';
import useStorage from './hooks/useStorage';

function App() {
  const { saveAtStorage } = useStorage();

  saveAtStorage('users', users);

  return (
    <div className="flex max-h-screen bg-soft-white">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
