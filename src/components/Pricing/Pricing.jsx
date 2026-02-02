import pricingImg from './pr.png'
import './Pricing.css'

function Pricing() {
  return (
    <section className='pricing'>
        <div className="container">
            <div className="pricing-container">
                <img src={pricingImg} alt="" />
                <div>
                    <h1>
                        Get started now
                    </h1>
                    <p>
                        Create custom landing pages with Omega that converts <br />
                         more visitors than any website. With lots of unique blocks,  <br />
                          you can easily build a page without coding.
                    </p>
                    <div>
                        <input type="text" 
                        placeholder='Email adrdess' />
                        <button>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Pricing