import React from 'react';
import './Services.css';
import serviceImage1 from "../assets/photo1.jpg";
import serviceImage2 from "../assets/photo2.jpg";
import serviceImage3 from "../assets/photo3.jpg";

const Services = () => {
  const homeServices = [
    {
      category: 'Plumbing',
      services: [
        {
          title: 'Pipe Repair',
          description: 'Fixing broken pipes and leaks to prevent water damage and maintain water flow.',
          image: serviceImage1,
        },
        {
          title: 'Geyser Installation',
          description: 'Installing and repairing water heaters for a continuous hot water supply.',
          image: serviceImage2,
        },
        {
          title: 'Drain Cleaning',
          description: 'Cleaning blocked drains and ensuring proper water flow in your plumbing system.',
          image: serviceImage3,
        },
        {
          title: 'Drain Cleaning',
          description: 'Cleaning blocked drains and ensuring proper water flow in your plumbing system.',
          image: serviceImage3,
        },
      ],
    },
    {
      category: 'Electrical',
      services: [
        {
          title: 'Wiring and Rewiring',
          description: 'Installing and upgrading electrical wiring to meet safety standards.',
          image: serviceImage1,
        },
        {
          title: 'Lighting Installation',
          description: 'Installing indoor and outdoor lighting systems to brighten up your home.',
          image: serviceImage2,
        },
        {
          title: 'Electrical Repairs',
          description: 'Fixing electrical faults to ensure your home is safe and functional.',
          image: serviceImage3,
        },
        {
          title: 'Electrical Repairs',
          description: 'Fixing electrical faults to ensure your home is safe and functional.',
          image: serviceImage3,
        },
      ],
    },
    {
      category: 'Cleaning',
      services: [
        {
          title: 'House Cleaning',
          description: 'Comprehensive cleaning services including dusting, vacuuming, and more.',
          image: serviceImage1,
        },
        {
          title: 'Carpet Cleaning',
          description: 'Deep cleaning your carpets to remove dirt, stains, and allergens.',
          image: serviceImage2,
        },
        {
          title: 'Window Washing',
          description: 'Professional window washing to make your home shine inside and out.',
          image: serviceImage3,
        },
        {
          title: 'Window Washing',
          description: 'Professional window washing to make your home shine inside and out.',
          image: serviceImage3,
        },
      ],
    },
    {
      category: 'Gardening',
      services: [
        {
          title: 'Lawn Mowing',
          description: 'Regular lawn mowing services to maintain your yard’s beauty.',
          image: serviceImage1,
        },
        {
          title: 'Garden Design',
          description: 'Designing and landscaping your garden to fit your style and preferences.',
          image: serviceImage2,
        },
        {
          title: 'Tree Trimming',
          description: 'Trimming trees to ensure safety, beauty, and health of your plants.',
          image: serviceImage3,
        },
        {
          title: 'Tree Trimming',
          description: 'Trimming trees to ensure safety, beauty, and health of your plants.',
          image: serviceImage3,
        },
      ],
    },
  ];

  return (
    <section id="services" className="services-section">
      <h2>Our Home Services</h2>
      {homeServices.map((category, index) => (
        <div key={index} className="service-category">
          <h3>{category.category}</h3>
          <div className="services-grid">
            {category.services.map((service, index) => (
              <div key={index} className="service-card">
                <img src={service.image} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;