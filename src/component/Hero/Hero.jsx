import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Driving Innovation in Education for a Brighter Future </h1>
        <p>
          Driving innovation in education transforms the learning experience,
          making it more engaging, effective, and accessible. By embracing new
          technologies and teaching strategies, we empower students to become
          critical thinkers and problem-solvers, ready to face the challenges of
          the future.
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
