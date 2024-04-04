import Main from './components/Main';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="flex max-h-screen bg-soft-white">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
