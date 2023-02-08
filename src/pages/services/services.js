import "./services.css";

import Agriculture from "../images/agriculture.jpg";

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
            <span id="title">Farming</span>
            <span id="content">Producing compost for farmers.</span>
          </div>

          <div>
            <span id="image">
              <img src={Agriculture} alt="agric" />
            </span>
            <span id="title">Waste Collection</span>
            <span id="content">Collecting solid waste.</span>
          </div>

          <div>
            <span id="image">
              <img src={Agriculture} alt="agric" />
            </span>
            <span id="title">Food</span>
            <span id="content">Distributing organic food</span>
          </div>

          <div>
            <span id="image">
              <img src={Agriculture} alt="agric" />
            </span>
            <span id="title">Recycling</span>
            <span id="content">
              Distributing recycleable waste to partners.
            </span>
          </div>

          {/*
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
          </div> */}
        </div>
      </section>

      <section id="services-waste-management" className="services-containers">
        <h2 className="services-header">Solid waste management</h2>
        <p className="services-paragraph">
          At Okoa Organics, we like to turn trash into treasure (and compost).
          We offer solid waste management services that are safe, efficient, and
          actually pretty fun, if we do say so ourselves. Our goal is to reduce
          waste's environmental impact through composting, recycling, and energy
          recovery, all while keeping our clients' garbage out of the landfill
          and their spirits high. So sit back, relax, and let us handle the
          dirty work!
        </p>
        <div id="services-waste-management-container"></div>
        <div className="services-buttons">
          <button>
            <p>Partner with us</p>
            <img src="#" alt="" />
          </button>
          <button></button>
          <button></button>
        </div>
      </section>

      <section id="services-food-market" className="services-containers">
        <h2 className="services-header">Food Distribution</h2>
        <p className="services-paragraph">
          At Okoa Organics, we strive to promote healthy living through local,
          sustainable food systems. We distribute food directly from farmers to
          consumers, cutting out the middlemen and bringing fresh, nutritious
          produce straight to your door. By doing so, we support small-scale
          farmers, reduce food waste, and provide our customers with access to
          delicious, healthy food. So, come join us in our mission to create a
          healthier and more sustainable world, one meal at a time!
        </p>
        <div id="food-market-container"></div>
      </section>

      <section id="services-farming-solutions" className="services-containers">
        <h2 className="services-header">Sustainable farming solutions</h2>
        <p className="services-paragraph">
          At Okoa Organics, we distribute fresh, healthy food directly from
          farmers to consumers and also provide compost from our solid waste
          management efforts. We work to reduce food waste and promote
          sustainable food systems, while also supporting small-scale farmers.
          Additionally, by creating compost from our waste management, we strive
          to reduce the environmental impact of waste and promote a healthier
          planet. Join us in our mission to create a more sustainable world, one
          meal and one compost pile at a time!
        </p>
        <div id="farming-solutions-container"></div>
      </section>

      <section></section>
    </main>
  );
}
