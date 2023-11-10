import './App.scss';
import Layout from './components/Layouts';
import Home from './components/Home';
import About from './components/About'
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
