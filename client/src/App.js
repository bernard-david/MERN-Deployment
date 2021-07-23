import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Add from './views/Add';
import One from './views/One';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/pirates"/>
        <Add path="/pirate/create"/>
        <One path="/pirate/:_id"/>
      </Router>
      
    </div>
  );
}

export default App;
