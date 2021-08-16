import React from 'react';
import './App.css';
import Header from './components/01_header/Header';
import {Main} from "./components/02_main/Main";
import { MyWorks } from './components/04_myWorks/MyWorks';

import {Hiring} from "./components/05_hiring/Hiring"
import {Contacts} from "./components/06_contacts/Contacts"
import {Footer} from "./components/07_footer/Footer"
import { Skills } from './components/03_skills/Skills';


//TODO:better
//!better
//?better

function App() {
  return (
      <div>
        <Header />
        <Main/>
        <hr color={'gray'} style={{margin:0}} />
        <Skills/>
        <hr color={'gray'} style={{margin:0}} />
        <MyWorks />
        <hr color={'gray'} style={{margin:0}} />
        <Hiring/>
        <hr color={'gray'} style={{margin:0}} />
        <Contacts/>
        <hr color={'gray'} style={{margin:0}} />
        <Footer/>
      </div>
  );
}

export default App;
