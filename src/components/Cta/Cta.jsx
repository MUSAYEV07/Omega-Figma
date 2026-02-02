import cta from './images/cta-images.png'
import './Cta.css'

function Cta() {
  return (
    <section className='cta'>
        <div className="container">
            <div className="cta-container">
                <div className="cta-content">
                    <h1>
                        50k+ users are <br />
                         using landing page.
                    </h1>
                    <p>
                        Create custom landing pages with Omega that converts <br />
                         more visitors than any website. With lots of unique <br />
                         blocks, you can easily build a page without coding.
                    </p>
                    <button>
                        Get Started
                    </button>
                </div>
                <div className="cta-img">
                    <img src={cta} alt="cta-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta