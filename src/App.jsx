import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-x-4 sm:grid-cols-2">
      <SideBar />
      <h1 className=" grid">Hola</h1>
    </div>
  );
}

export default App;
