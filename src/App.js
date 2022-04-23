import NewForm from './components/new_form/new-form';
import Form from './components/form/form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className='page-navbar'></div>
      <div className='page-content'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewForm/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
