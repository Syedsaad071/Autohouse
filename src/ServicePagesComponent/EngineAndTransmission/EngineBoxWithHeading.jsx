import React from 'react';
import './EngineBoxWithHeading.css'; // Import external CSS file
import Boxwithheading1 from '../../assets/images/images/Engine1.png'
import Boxwithheading2 from '../../assets/images//images/Engine2.png';
import Boxwithheading3 from '../../assets/images//images/Engine3.png';

const EngineBoxWithHeading = () => {
 const services = [
         {
             title: "Brake & Suspension",
             description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
             imageUrl: Boxwithheading1,
         },
         {
             title: "Electrical System Repairs",
             description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
             imageUrl: Boxwithheading2,
         },
         {
             title: "Routine Maintenance",
             description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
             imageUrl: Boxwithheading3,
         }
     ];
 
     return (
         <div className="EngineBox-container">
             <div className="EngineBox-title">
 
             <h2 className='EngineBox-header'>Our Comprehensive Services For European Vehicles</h2>
             <p className='EngineBox-header EngineBox-description'>
             At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions that are tailored to meet your vehicle’s specific needs. With our unrivaled expertise and commitment to excellence, you can trust us to keep your vehicle running at its best.
             </p>
             </div>
             <div className="EngineBox-grid">
                 {services.map((service, index) => (
                     <div className="EngineBox-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                         <div className="EngineBox-content">
                             <h3>{service.title}</h3>
                             <p>{service.description}</p>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
}

export default EngineBoxWithHeading