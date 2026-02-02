import './Content.css'
import contentImg from './content.png'

function Content() {
  return (
    <section className='content'>
        <div className="container">
            <div className="content-container">
                <div className="content-card">
                    <h1>
                        Save tons of time <br />
                         on design & coding.
                    </h1>
                    <p>
                        Create custom landing pages with Omega that converts <br />
                         more visitors than any website. With lots of unique blocks, <br />
                          you can easily build a page without coding.
                    </p>
                    <button>
                        Get Started
                    </button>
                </div>
                <div className="container-img">
                    <img src={contentImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content