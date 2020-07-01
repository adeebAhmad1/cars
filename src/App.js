import React from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css"
import Header from "./components/Header"
import Car from './components/Car';
import Companies from './components/Companies';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Car />
      <Companies />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
