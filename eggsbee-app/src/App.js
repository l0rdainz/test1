
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Eggsbee from "./pages/eggsbee";
import Records from "./pages/records";
import Simulator from "./pages/simulator";
import Register from "./pages/register";
import BeforeExp from "./pages/beforeexp";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/eggsbee" element={<Eggsbee/>} />
          <Route path="/record" element={<Records/>} />
          <Route path="/simulator" element={<Simulator/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/beforeexp" element={<BeforeExp/>} />
          <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
  
        </Routes>
      
     
     </Router>
     <Footer> </Footer>
    </div>
  );
}

export default App;
