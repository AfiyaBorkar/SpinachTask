import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TaskApp from './components/TaskApp';


function App() {
  return (
  <>
  <div className='app'>
  <BrowserRouter>
  <Routes>
    <Route path={'/'} element={<TaskApp/>}>

    </Route>
  </Routes>
  </BrowserRouter>
  </div>
  </>
  );
}

export default App;
