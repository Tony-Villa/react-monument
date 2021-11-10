import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingComponent from './components/landing/LandingComponent';
import BlogComponent from './components/blog/BlogComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LandingComponent /> */}
      <BlogComponent />
      <Footer />
    </div>
  );
}

export default App;
