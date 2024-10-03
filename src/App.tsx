import React from 'react';
import './App.css';
import '@fontsource/poppins'
import { Header } from './components/Header';
import { useState } from 'react';
import Modal from './components/Modal';
import { Divider } from './components/Divider';
import { Sobre } from './components/Sobre';
import { Planos } from './components/Planos';
import { Footer } from './components/Footer';
import { Contato } from './components/Contato';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Header/>
      <div className="container" id='home'>
        <div className='text-content'>
          <h1 className="mainText">Treine<br/>questões com<br/>amigos</h1>
          <p className='secondary-text'>Vestibulandos é um app que  permite que 
            você que estuda para<br/>concurso ou vestibular consiga 
            treinar questões de maneira 
            didática<br/>e gameficada com seus amigos.
          </p>
          <button className='button' onClick={openModal}>
            <span className="circle"></span>
            SAIBA MAIS
            </button>
        </div>
        <div className="img-container">
          <img className="main-img" src='/images/img-students.jpg'/>
        </div>
      </div>
      <Divider />
      <Sobre />
      <Divider />
      <Planos />
      <Divider />
      <Contato />
      <Footer />
      {isModalOpen && (
        <Modal closeModal={closeModal}></Modal>
      )}
    </div>

  
  );
}

export default App;
