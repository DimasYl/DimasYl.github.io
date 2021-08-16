import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {Main} from "./components/Main/Main";
import { MyWorks } from './components/myWorks/MyWorks';
import {Skills} from "./components/skills/Skills";
import {Hiring} from "./components/hiring/Hiring"
import {Contacts} from "./components/Contacts/Contacts"
import {Footer} from "./components/footer/Footer"


//TODO:better
//!better
//?better

function App() {
  return (
      <div>
        <Header />
        <Main/>
        <Skills/>
        <MyWorks />
        <Hiring/>
        <Contacts/>
        <Footer/>
      </div>
  );
}

export default App;
