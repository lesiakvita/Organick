import React, { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);

      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-section__content">
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubmit} className="newsletter-section__form">
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-section__input"
          />
          <button type="submit" className="newsletter-section__button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
