import NewForm from './components/new_form/new-form';
import Form from './components/form/form';
import { HashRouter, Route, Routes} from 'react-router-dom';
import SubmitedForm from './components/new_form/submited-form';
import SubmitedAnswer from './components/form/submited-answer';
import logo from './LOGO.png';

function App() {
  const logoClick = () => {
    console.log("click en logo")
  }
  return (
    <div className="App">
      <HashRouter>
        <div className='page-navbar'><div className='logo-container'><img src={logo} className='logo-img' onClick={logoClick}/></div></div>
        <div className='background-pattern'></div>
        <div className='page-content'>
        <Routes>
          <Route path='/' element={<NewForm/>}/>
          <Route path= '/form/:id' element={<Form/>}/>
          <Route path='/submited-form/:formId' element={<SubmitedForm/>}/>
          <Route path='/submited-answer' element={<SubmitedAnswer/>}/>
          
        </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
