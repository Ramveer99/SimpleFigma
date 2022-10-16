
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter as Router,Routes} from 'react-router-dom'
import AllRouter from '../src/AllRouter'

function App() {
  return (
    <div className="App">
    
       <Router>
           <Navbar /> 
           <AllRouter />
        </Router>
      
    </div>
  );
}

export default App;
