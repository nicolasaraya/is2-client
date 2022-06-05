import NewForm from './components/new_form/new-form';
import Form from './components/form/form';
import Dashboard from './components/dashboard/dashboard';
import {Route, Routes, useNavigate} from 'react-router-dom';
import SubmitedForm from './components/new_form/submited-form';
import SubmitedAnswer from './components/form/submited-answer';
import ViewForm from './components/viewForm/form'
import logo from './LOGO.png';
import React from 'react'
function App() {

  const navigate = useNavigate();
  const logoClick = () => {
    navigate('/',{replace:true})
  }
  return (
    <div className="App">
        <div className='page-navbar'><div className='logo-container'><img src={logo} className='logo-img' onClick={logoClick}/></div></div>
        <div className='background-pattern'></div>
        <div className='page-content'>
        <Routes>
          <Route path='/' element={<NewForm/>}/>
          <Route path= '/form/:id' element={<Form/>}/>
          <Route path= '/getFormAnswers/:empresa/:id' element={<ViewForm/>}/>
          <Route path= '/dashboard/:empresa' element={<Dashboard/>}/>
          <Route path='/submited-form/:formId' element={<SubmitedForm/>}/>
          <Route path='/submited-answer' element={<SubmitedAnswer/>}/>
        </Routes>
        </div>
    </div>
  );
}

export default App;
