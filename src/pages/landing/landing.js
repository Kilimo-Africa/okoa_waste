import React from "react";
// import { useNavigate } from "react-router-dom";
import "./landing.css";

import Recycle from "../images/recycle.svg";
import Recycle1 from "../images/Recycle.svg";
import Steel from "../images/steel.jpg";
import Fashion from "../images/fashion.jpg";
import Agriculture from "../images/agriculture.jpg";
import Paper from "../images/paper.jpg";

export default function Landing() {
  return (
    <main id="landing">
      <section id="tagline">
        <span id="title">Towards a greener Nation</span>
        <span id="paragraph">
          We close the gap between organic waste and organic fertilizers <br />
        </span>
      </section>

      <section id="images">
        <div className="recycle-image" id="recycle-image1"></div>
        <div id="recycle-icon">
          <img src={Recycle} alt="recycle" />
        </div>
        <div className="recycle-image" id="recycle-image2"></div>
      </section>

      <section id="impact">
        <div id="impact-title">Our Impact</div>
        <div id="impact-content">
          <div>
            <span className="span-image" id="spa1"></span>
            <span className="span-number">10,000+</span>
            <span className="span-word">Households</span>
          </div>

          <div>
            <span className="span-image" id="spa3"></span>
            <span className="span-number">300</span>
            <span className="span-word">Tonnes of waste Collected</span>
          </div>

          <div>
            <span className="span-image" id="spa4"></span>
            <span className="span-number">5,000+</span>
            <span className="span-word">Farmers</span>
          </div>
        </div>
      </section>

      <section id="assistance">
        <div id="assistance-title">
          <span id="title">How may we be of assistance?</span>
          <span id="par">We are all things organic.</span>
        </div>
        <div id="assistance-content">
          <div id="picking">
            <span id="title">Waste</span>
            <span id="wording">
              <span>
                Whether you are an individual or a family we collect solid Waste
                from you free of charge and pay you.
              </span>
            </span>
          </div>
          <div id="collection">
            <span id="title">Compost</span>
            <span id="wording">
              <span>
                Whether a small or large scale farmer ensure you get quality and
                quantity organic fertilizer from us.
              </span>
            </span>
          </div>
        </div>
      </section>

      <section id="solutions">
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

      <section id="image-tag">
        <img src={Recycle1} alt="tag" />
      </section>

      <section id="process">
        <div id="heading">
          <span id="title">The process</span>
          <span id="word">
            Learn what happens to your waste from collection
            <br />
            to decomposing.
          </span>
        </div>

        <div id="content">
          <div className="up">
            <span className="process-icon"></span>
            <span className="process-label">Collection </span>
          </div>
          <div className="down">
            <span className="process-label">Sorting</span>
            <span className="process-icon"></span>
          </div>
          <div className="up">
            <span className="process-icon"></span>
            <span className="process-label">Channeling</span>
          </div>
          <div className="down">
            <span className="process-label">Decomposing</span>
            <span className="process-icon"></span>
          </div>
          <div className="up">
            <span className="process-icon"></span>
            <span className="process-label">Distribution</span>
          </div>
          
        </div>
      </section>

      <section id="partners">
        <div id="title">Meet Our Partners</div>
        <div id="content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section id="request">
        <div id="image">{/* <img src={Africa} alt="Africa" /> */}</div>
        <div id="detail">
          <span>
            Join us today in turning Africa green, request a free waste
            collection from us.
          </span>

          <button to="/auth" id="redirect-url">
            Request for waste Collection
          </button>
        </div>
      </section>
    </main>
  );
}
