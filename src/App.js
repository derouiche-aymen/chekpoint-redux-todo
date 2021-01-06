import './App.css';
import Addtask from './Component/Addtask';
import Listtask from './Component/Listtask'
import Filtre from './Component/Filtre'
function App() {
  return (
    <div className="App">
      <h1>TO-do List</h1>
      <Filtre />
      <Addtask />
      <Listtask />
    </div>
  );
}

export default App;
