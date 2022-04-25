import NewForm from './components/new_form/new-form';
import Form from './components/form/form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SubmitedForm from './components/new_form/submited-form';

function App() {

  return (
    <div className="App">
      <div className='page-navbar'></div>
      <div className='page-content'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewForm/>}/>
          <Route path= '/form' element={<Form/>}/>
          <Route path= '/form/:id' element={<Form/>}/>
          <Route path='/submited-form' element={<SubmitedForm/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
