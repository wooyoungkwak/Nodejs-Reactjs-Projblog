import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/prog-blog-styles.css";
import "./css/styles.css";

import Home from    './page/Home';
import About from   './page/About';
import Contact from './page/Contact';
import Blog from    './page/Blog';

import Nav from       './layout/Nav';
import Header from    './layout/Header';
import Footer from    './layout/Footer';
import PostPage from  './component/Postpage';
import AddScript from './component/AddScript';

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
          <Route exact path='/blog/post/:index'  element={<PostPage />} />
        </Routes>
        <Footer />
        <AddScript />
      </BrowserRouter>
    </div>
  );
}

export default App;
