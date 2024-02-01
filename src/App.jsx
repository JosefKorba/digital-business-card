import "./App.css";
import Photo from "./components/Photo";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="hero">
      <Photo />
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
