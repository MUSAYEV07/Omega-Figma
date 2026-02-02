import React from 'react'
import blogImg from './images/img.png'
import blogImgs from './images/img-2.png'
import './Blog.css'

function Blog() {
  const reviews = [
    {
      text: "OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
      name: "Jonathan Taylor",
      role: "CEO at Creativex",
      img: blogImg
    },
    {
      text: "Using Omega was amazing! I could build a landing page in minutes without any coding skills. Totally recommend it.",
      name: "Marie Stanley",
      role: "Digital Marketer, Writer",
      img: blogImgs
    }
  ];

  return (
    <section className='blog'>
      <div className="container">
        <div className="blog-container">
          <h1>Customer reviews</h1>
          <p>
            Create custom landing pages with Omega that converts <br />
            more visitors than any website.
          </p>

          <div className="block-cards">
            {reviews.map((review, index) => (
              <div key={index} className="block-card">
                <h3>{review.text}</h3>
                <div className="reviewer">
                  <img src={review.img} alt={review.name} />
                  <div>
                    <h2>{review.name}</h2>
                    <h3>{review.role}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Blog
