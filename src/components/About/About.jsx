import about from './images/layout-11.png'
import about_2 from './images/sidebar.png'
import about_3 from './images/chat-content.png'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-cards">
            <div className="about-card">
              <div>
                <img src={about} alt="" />
              </div>
              <div>
                <h2 className="about-card-title">Multiple Layouts</h2>
                <p className="about-card-subtitle">
                  With lots of unique blocks, you can <br />
                  easily build a page without coding.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div>
                <img src={about_2} alt="" />
              </div>
              <div>
                <h2 className="about-card-title">Fully Responsive</h2>
                <p className="about-card-subtitle">
                  With lots of unique blocks, you can <br />
                  easily build a page without coding.
                </p>
              </div>
            </div>

            <div className="about-card">
              <div>
                <img src={about_3} alt="" />
              </div>
              <div>
                <h2 className="about-card-title">Great Support</h2>
                <p className="about-card-subtitle">
                  With lots of unique blocks, you can <br />
                  easily build a page without coding.
                </p>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h1 className="about-content-title">
              Build a perfect <br />
              landing page fast.
            </h1>
            <p className="about-content-subtitle">
              Create custom landing pages with Omega that converts <br />
              more visitors than any website. With lots of unique blocks, <br />
              you can easily build a page without coding.
            </p>
            <button className="about-content-btn">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
