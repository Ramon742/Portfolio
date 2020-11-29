import './App.scss';

import Header from './components/header/header.component';
import Cover from './components/cover/cover.component';
import Services from './components/services/services.component';
import Projects from './components/projects/projects.component';
import About from './components/about/about.component';
import Contact from './components/contact/contact.component';
import Footer from './components/footer/footer.component';

const App = () => {
  return (
    <div>
      <Header />
      <Cover />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
