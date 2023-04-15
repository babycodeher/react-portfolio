import './App.css';
import NavBar from './components/pages/NavBar';
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <Router>
    <NavBar />
   <Routes basename='wumi-afolabi-portfolio'>
    <Route path='/wumi-afolabi-portfolio/' element={<HomePage />} />
   </Routes>
    </Router>
  );
}