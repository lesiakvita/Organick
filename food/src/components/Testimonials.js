import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Consumer",
    text: "This online store has the best organic produce! Everything is always fresh, and the delivery is quick and reliable. Highly recommended!",
    rating: 5,
    image: require("../img/first_face.jpg"),
  },
  {
    id: 2,
    name: "Emily Smith ",
    role: "Farmer",
    text: "I love shopping here for organic foods. The selection is great, and the checkout process is seamless. Plus, they often have great deals!",
    rating: 4,
    image: require("../img/second_face.jpg"),
  },
  {
    id: 3,
    name: "Sara Taylor ",
    role: "Customer",
    text: "Fantastic quality and fast delivery! I’ve never been disappointed with the organic products from this store. Definitely my go-to for healthy shopping.",
    rating: 5,
    image: require("../img/third_face.jpg"),
  },
  {
    id: 4,
    name: "Tim Bergan ",
    role: "Customer",
    text: "Super convenient and trustworthy! The organic options are extensive, and everything arrives fresh. I appreciate the eco-friendly packaging too.",
    rating: 5,
    image: require("../img/fourth_face.avif"),
  },
  {
    id: 5,
    name: "James Swift  ",
    role: "Customer",
    text: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    rating: 5,
    image: require("../img/james.avif"),
  },
];

const circles = [
  {
    id: 1,
    title: "100%",
    subtitle: "Organic",
  },
  {
    id: 2,
    title: "285",
    subtitle: "Active Product",
  },
  {
    id: 3,
    title: "350+",
    subtitle: "Organic Orchads",
  },
  {
    id: 4,
    title: "25+",
    subtitle: "Years of Farming",
  },
];

export default function TestimonialAndCirclesSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className=" testimonial-section testimonial-and-circles-section"
      id="testimonial"
    >
      <h3 className="testimonial-section__subtitle">Testimonial</h3>
      <h1 className="testimonial-section__title">What Our Customer Saying?</h1>
      <div className="testimonial-section__content">
        <div className="testimonial-section__image">
          <img
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
          />
        </div>
        <div className="testimonial-section__text">
          <div className="testimonial-section__rating">
            {"★".repeat(testimonials[currentTestimonial].rating)}
            {"☆".repeat(5 - testimonials[currentTestimonial].rating)}
          </div>
          <div className="testimonial-section__desc">
            <p>{testimonials[currentTestimonial].text}</p>
            <h4>{testimonials[currentTestimonial].name}</h4>
            <h5>{testimonials[currentTestimonial].role}</h5>
          </div>
        </div>
        <div className="testimonial-section__controls">
          <button onClick={handlePrev}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </div>
      <div className="testimonial-section__indicators">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={
              index === currentTestimonial ? "indicator active" : "indicator"
            }
            onClick={() => setCurrentTestimonial(index)}
          ></span>
        ))}
      </div>
      <div className="circle-section__divider"></div>{" "}
      <div className="circle-section__container">
        {circles.map((circle) => (
          <div key={circle.id} className="circle-section__circle">
            <div className="circle-section__title">{circle.title}</div>
            <div className="circle-section__subtitle">{circle.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
