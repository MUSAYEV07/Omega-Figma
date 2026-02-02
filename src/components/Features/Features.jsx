import './Features.css'
import card from './images/card.png'
import card_2 from './images/card-2.png'
import card_3 from './images/card-3.png'
import card_4 from './images/card-4.png'
import card_5 from './images/card-5.png'
import card_6 from './images/card-6.png'
import card_7 from './images/card-7.png'
import card_8 from './images/card-8.png'

function Features() {
  return (
    <section className='features'>
      <div className="container">
        <div className="features-container">
          <h1>It’s everything <br /> you’ll ever need</h1>

          <div className="cards">
            <div className="card">
              <div className='cards-img'>
                <img src={card} alt="" />
              </div>
              <h2>50+ Unique Design Blocks</h2>
            </div>

            <div className="card">
              <div className='cards-img'>
                <img src={card_2} alt="" />
              </div>
              <h2>Multiple Layouts</h2>
            </div>

            <div className="card">
              <div className='cards-img'>
                <img src={card_3} alt="" />
              </div>
              <h2>Mobile First Design</h2>
            </div>

            <div className="card">
              <div className='cards-img'>
                <img src={card_4} alt="" />
              </div>
              <h2>Fully Responsive</h2>
            </div>

            <div className="card">
              <div className='cards-img'>
                <img src={card_5} alt="" />
              </div>
              <h2>Bootstrap 4 Framework</h2>
            </div>

            <div className="card">
              <div className='cards-img'>
                <img src={card_6} alt="" />
              </div>
              <h2>Humanly Support</h2>
            </div>

            <div className="card">
              <div className='cards-img'>
                <img src={card_7} alt="" />
              </div>
              <h2>Lifetime Updates</h2>
            </div>

            <div className="card">
              <div className='cards-img'>
                <img src={card_8} alt="" />
              </div>
              <h2>Rich Documentation</h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
