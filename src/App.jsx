import './styles/main.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Industries from './components/Industries';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <TechStack />
      <Industries />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
