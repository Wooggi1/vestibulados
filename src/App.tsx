import React from 'react';
import './App.css';
import '@fontsource/poppins'
import { Header } from './components/Header';


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <div className='text-content'>
          <h1 className="mainText">Treine questões com amigos</h1>
          <p>Vestibulandos é um app que  permite que 
            você que estuda para concurso eu vestibular consiga 
            treinar questões de maneira 
            didática e gameficada com seus amigos.
          </p>
          <button className='button-saibaMais'>Saiba mais</button>
        </div>
        <div className="img-container">
          <img className="main-img" src='/images/img-students.jpg'/>
        </div>
      </div>
    </div>

  
  );
}

export default App;
