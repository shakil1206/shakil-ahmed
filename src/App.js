import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import Intro from './component/Intro/Intro';
import About from './component/About/About';
import Skill from './component/Skill/Skill';
import LoveToDo from './component/LoveToDo/LoveToDo';
import Projects from './component/Projects/Projects';



function App() {
  return (
    <>
    <Header></Header>
    <Intro></Intro>
    <About></About>
    <Skill></Skill>
    <LoveToDo></LoveToDo>
    <Projects></Projects>
    </>
    
  );
}

export default App;
