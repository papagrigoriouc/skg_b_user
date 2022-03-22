import './App.css';
import PropertyList from './components/PropertyList';
import "bootstrap/dist/css/bootstrap.css";
import CreateProperty from './components/CreateProperty';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';




function App() {



  return (
    <div className="App">   
    <Navbar/>    
    {/* <Carousel/> */}
    <Switch>
      <Route exact path='/'>
         <PropertyList/>
      </Route>     
      <Route exact path='/create'>
        <CreateProperty/>
      </Route>  
    </Switch>      
     
    </div>
  );
}

export default App;
