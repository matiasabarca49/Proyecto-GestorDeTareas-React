import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComponentTaskList from './components/container/Task/ComponentTaskList';
import Navbar from './components/container/Navbar/Navbar';
import Calendar from './components/container/Calendar/Calendar.jsx';
import TaskContDetail from './components/container/Task/TaskContDetail';
import NotesContainer from './components/container/Notes/NotesContainer.jsx';

function App() {
  return (

    <BrowserRouter>
      <div className='appContainer'>
        <Navbar />
        <div className='contentContainer'>
        <Routes>
          <Route exact path='/' element={ <ComponentTaskList /> } />
          <Route exact path='/task/:id' element={ <TaskContDetail /> } />
          <Route exact path='/Calendar' element={ <Calendar /> } />
          <Route exact path='/Notes' element={ <NotesContainer /> } />
        </Routes> 
        </div>  
      </div>
    </BrowserRouter>

  
  );
}

export default App;
