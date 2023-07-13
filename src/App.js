
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
// import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Process from './components/Process';
import Blog from './components/Blog';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header></Header>
           <Routes>
                 <Route exact path='/' element={<Home></Home>}></Route>
                 <Route exact path='/About' element={<About></About>}></Route>
                 <Route exact path='/Process' element={<Process></Process>}></Route>
                 <Route exact path='/Blog' element={<Blog></Blog>}></Route>
                 <Route exact path='/Contact' element={<Contact></Contact>}></Route>
          </Routes>
          </div>
    </Router>
  );
}

export default App;
