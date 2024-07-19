import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Programs from "./component/programs/Programs";
import Title from "./component/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About />
      </div>
    </div>
  );
};

export default App;
