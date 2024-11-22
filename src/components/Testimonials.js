import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        <div className="card">
          <p>"Amazing services! Highly recommend."</p>
          <h4>- John Doe</h4>
        </div>
        <div className="card">
          <p>"Exceptional customer support and quality work."</p>
          <h4>- Jane Smith</h4>
        </div>
        <div className="card">
          <p>"I loved working with this team!"</p>
          <h4>- Alex Johnson</h4>
        </div>
      </div>
    </div>
  );
}
