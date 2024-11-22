// import React from 'react';
// import './TopRatedServices.css'; // CSS for the section
// import serviceImage1 from "../assets/photo1.jpg";
// import serviceImage2 from "../assets/photo2.jpg";
// import serviceImage3 from "../assets/photo3.jpg"; 
// export default function TopRatedServices(){
//   return (
//     <section className="top-rated-services">
//       <h2>Top Rated Services</h2>
//       <div className="services-grid">
//         <div className="service-block">
//           <img src={serviceImage1}alt="Service 1" />
//           <h3>Service 1</h3>
//           <p>Short description of the service.</p>
//         </div>
//         <div className="service-block">
//           <img src={serviceImage2} alt="Service 2" />
//           <h3>Service 2</h3>
//           <p>Short description of the service.</p>
//         </div>
//         <div className="service-block">
//           <img src={serviceImage3} alt="Service 3" />
//           <h3>Service 3</h3>
//           <p>Short description of the service.</p>
//         </div>
//         <div className="service-block">
//           <img src="path-to-image.jpg" alt="Service 4" />
//           <h3>Service 4</h3>
//           <p>Short description of the service.</p>
//         </div>
//         {/* Optional 5th block */}
//         <div className="service-block">
//           <img src="path-to-image.jpg" alt="Service 5" />
//           <h3>Service 5</h3>
//           <p>Short description of the service.</p>
//         </div>
//       </div>
//     </section>
//   );
// };


import React from 'react';
import serviceImage1 from '../assets/photo1.jpg';
import serviceImage2 from '../assets/photo2.jpg';
import serviceImage3 from '../assets/photo3.jpg';
import './TopRatedServices.css';

export default function TopRatedServices() {
  return (
    <section className="top-rated-services">
      <h2>Top Rated Services</h2>
      <div className="services-grid">
        <div className="service-block">
          <img src={serviceImage1} alt="Service 1" />
          <h3>Service 1</h3>
          <p>Short description of the service.</p>
        </div>
        <div className="service-block">
          <img src={serviceImage2} alt="Service 2" />
          <h3>Service 2</h3>
          <p>Short description of the service.</p>
        </div>
        <div className="service-block">
          <img src={serviceImage3} alt="Service 3" />
          <h3>Service 3</h3>
          <p>Short description of the service.</p>
        </div>
        <div className="service-block">
          <img src={serviceImage2} alt="Service 4" />
          <h3>Service 4</h3>
          <p>Short description of the service.</p>
        </div>
        
      </div>
    </section>
  );
}
