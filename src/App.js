
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';





function App() {
  // const title="Welcome to the blog";
  // const likes=94;
  return (
    <Router>
      <div className="App">
        <Navbar/>
        
        <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/blogs/:id" element={<BlogDetails />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          
          {/* <h1>{title}</h1>
          <p>Liked {likes} times</p> */}
        </div>
      </div>
      </Router>
  );
}

export default App;
