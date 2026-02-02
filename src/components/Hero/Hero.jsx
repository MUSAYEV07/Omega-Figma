import React from "react";
import email from "./email.png";
import hero from "./hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container">
        <div className="hero-container">
          <h1>
            Bring more leads for <br />
            your business fast.
          </h1>
          <p>
            Create custom landing pages with Omega that convert more <br />
            visitors than any website. With lots of unique blocks, you can <br />
            easily build a page without coding.
          </p>

          <div className="hero-btns">
            <div className="input-wrapper">
              <img src={email} alt="Email icon" />
              <input
                type="email"
                placeholder="Email address"
              />
            </div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
