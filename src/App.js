import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './component/Nav';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Blog from './component/Blog';
import AddScript from './component/AddScript';

import "./css/prog-blog-styles.css";
import "./css/styles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog'  element={<Blog />} />
        </Routes>
        <Footer />
        <AddScript />
      </BrowserRouter>
    </div>
  );
}

export default App;
