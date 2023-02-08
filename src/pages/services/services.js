import "./services.css";

// import Recycle from "../images/recycle.svg";
// import Recycle1 from "../images/Recycle.svg";
import Steel from "../images/steel.jpg";
import Fashion from "../images/fashion.jpg";
import Agriculture from "../images/agriculture.jpg";
import Paper from "../images/paper.jpg";

export default function Services() {
  return (
    <main className="services">
      <section id="solutions" className="services-containers">
        <div id="heading">
          <span id="title">We serve everyone</span>
          <span id="word">
            Whatever your industry does be sure that we have a solution for you
            <br />
            that is enviromental friendly.
          </span>
        </div>

        <div id="content">
          <div>
            <span id="image">
              <img src={Agriculture} alt="agric" />
            </span>
            <span id="title">Agriculture</span>
            <span id="content">
              Producing manure for millions of farmers in Africa
            </span>
          </div>

          <div>
            <span id="image">
              <img src={Fashion} alt="agric" />
            </span>
            <span id="title">Fashion</span>
            <span id="content">
              Contributing to the industry by providing raw materials
            </span>
          </div>

          <div>
            <span id="image">
              <img src={Paper} alt="agric" />
            </span>
            <span id="title">Paper</span>
            <span id="content">Providing pulp for leading publishers.</span>
          </div>

          <div>
            <span id="image">
              <img src={Steel} alt="agric" />
            </span>
            <span id="title">Steel</span>
            <span id="content">
              Building Africa by converting some of your waste into steel.
            </span>
          </div>
        </div>
      </section>

      <section id="services-waste-management" className="services-containers">
        <h2>Solid waste management</h2>
        <p>
          At Okoa Organics, we like to turn trash into treasure (and compost).
          We offer solid waste management services that are safe, efficient, and
          actually pretty fun, if we do say so ourselves. Our goal is to reduce
          waste's environmental impact through composting, recycling, and energy
          recovery, all while keeping our clients' garbage out of the landfill
          and their spirits high. So sit back, relax, and let us handle the
          dirty work!
        </p>
        <div id="services-waste-management-container">
        </div>
      </section>

      <section
        id="services-food-market"
        className="services-containers"
      ></section>

      <section
        id="services-farming-solutions"
        className="services-containers"
      ></section>

      <section></section>
    </main>
  );
}
