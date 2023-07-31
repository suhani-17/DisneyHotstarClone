import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     {/* to smoothly browse between pages w/o refreshing */}
     {/* Switch is replaced by Routes */}
     <Router> 
        <Header/>
        <Routes>
            <Route exact path='/' element={<Login />}>
            </Route>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
