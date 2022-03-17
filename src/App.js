import './App.css';
import PropertyList from './components/PropertyList';
import "bootstrap/dist/css/bootstrap.css";
import CreateProperty from './components/CreateProperty';

function App() {
  return (
    <div className="App">
      <CreateProperty/>
      <PropertyList/>
    </div>
  );
}

export default App;
