import '../../Landing.css';
import Archive from './Archive';
import LandingHeader from './LandingHeader';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import articleTeaser from '../../data/articleTeasers';

const LandingComponent = () => {
  return (
    <div>
      <LandingHeader />
      <Archive />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default LandingComponent;
