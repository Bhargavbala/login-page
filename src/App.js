
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import RouteHandle from "./RouteHandler"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
         <RouteHandle/>
         
        
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
