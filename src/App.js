import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spotlight from "./components/screens/Spotlight";
import Facilities from "./components/screens/Facilities";
import About from "./components/screens/About";
import Testimonial from "./components/screens/Testimonial";
import Contact from "./components/screens/Contact";
import Footer from "./components/screens/Footer";


function App() {
  return (
    <>
      <Spotlight />
      <Facilities />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
