import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Intro from './component/Intro/Intro';
import About from './component/About/About';
import Skill from './component/Skill/Skill';

function App() {
  return (
    <>
    <Header></Header>
    <Intro></Intro>
    <About></About>
    <Skill></Skill>
    </>
  );
}

export default App;
