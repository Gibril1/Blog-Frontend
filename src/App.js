import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import AllBlogs from './pages/AllBlogs';
import Header from './components/Header';
import BlogForm from './components/BlogForm';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path ='/' element = {<Register/>}/>
            <Route path ='/login' element = {<Login/>}/>
            <Route path ='/allblogs' element = {<AllBlogs/>}/>
            <Route path ='/create' element = {<BlogForm/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
