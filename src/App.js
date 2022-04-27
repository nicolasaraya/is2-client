import NewForm from './components/new_form/new-form';
import Form from './components/form/form';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import SubmitedForm from './components/new_form/submited-form';
import SubmitedAnswer from './components/form/submited-answer';

function App() {

  return (
    <div className="App">
      <div className='page-navbar'></div>
      <div className='page-content'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<NewForm/>}/>
          <Route path= '/form/:id' element={<Form/>}/>
          <Route path='/submited-form/:formId' element={<SubmitedForm/>}/>
          <Route path='/submited-answer' element={<SubmitedAnswer/>}/>
        </Routes>
      </HashRouter>
      </div>
    </div>
  );
}

export default App;
