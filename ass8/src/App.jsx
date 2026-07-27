import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './feature/home/component/home';
import About from './feature/about/component/about';
import Contact from './feature/contact/component/contact';


function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;