import Navbar from "./components/Navbar/navbar.component";
import Hero from "./components/Hero/hero.component";
import Footer from "./components/Footer/footer.component";

function App() {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("bg.jpg")`
      }}
    >
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
