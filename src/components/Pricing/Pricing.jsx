import React, { useState } from "react";
import pricingImg from './pr.png'
import './Pricing.css'

function Pricing() {
  const [email, setEmail] = useState(""); // input qiymati

  const sendToTelegram = async () => {
    if (!email.trim()) return;

       const token = "7601912504:AAFEFjS8-VdN_1hwuKLduuNyHCh7vH23MSI";
        const chat_id = "8171553406";

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id,
        text: email
      }),
    });

    setEmail(""); // inputni tozalash
  };

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
                    <div className="input-button-wrapper">
                        <input 
                            type="text" 
                            placeholder='Email address' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={sendToTelegram}>
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
