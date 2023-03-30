import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComponentTaskList from './components/container/ComponentTaskList';
import Navbar from './components/pure/Navbar';
import Calendar from './components/container/Calendar';
import TaskContDetail from './components/container/TaskContDetail';

function App() {
  return (

    <BrowserRouter>
      <div className='appContainer'>
        <div className='navbar'> 
          <Navbar />
        </div>
        <div className='contentContainer'>
        <Routes>
          <Route exact path='/' element={ <ComponentTaskList /> } />
          <Route exact path='/Calendar' element={ <Calendar /> } />
          <Route exact path='/task/:id' element={ <TaskContDetail /> } />
        </Routes> 
        </div>
          
      </div>
    </BrowserRouter>

  
  );
}

export default App;
