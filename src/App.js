import Header from "./components/Header";
import Hero from "./components/Hero";
import Shorten from "./components/Shorten";
import Goals from "./components/Goals";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <Shorten />
      <Goals />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
