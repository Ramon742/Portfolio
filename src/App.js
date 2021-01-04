import React, { useState } from 'react';

import './App.scss';

import Header from './components/header/header.component';
import Cover from './components/cover/cover.component';
import Services from './components/services/services.component';
import Projects from './components/projects/projects.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

const App = () => {
  const [portuguese, setPortuguese] = useState(true);

  const changeLanguageToPortuguese = () => {
    setPortuguese(true);
  }

  const changeLanguageToEnglish = () => {
    setPortuguese(false);
  }

  return (
    <div>
      <Header changeLanguageToEnglish={changeLanguageToEnglish} changeLanguageToPortuguese={changeLanguageToPortuguese} portuguese={portuguese}/>
      <Cover portuguese={portuguese} />
      <Services portuguese={portuguese} />
      <Projects portuguese={portuguese} />
      <About portuguese={portuguese} />
      <Contact portuguese={portuguese} />
      <Footer portuguese={portuguese} />
    </div>
  );
}

export default App;
