import "./App.scss";
import ConsistOf from "../src/pages/consistOf";
import Intro from "../src/pages/intro";
import Features from "./pages/features";
import AboutUs from "./pages/aboutUs";
import Footer from "./components/footer";

function App() {
  
  return (
    <div>
      <Intro/>
      <Features />
      <ConsistOf />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
