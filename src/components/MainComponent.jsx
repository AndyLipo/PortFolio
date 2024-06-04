
import React from 'react';
import Background from '../assets/cell_background.png';
import PortF from './PortFolio';
import MainAbout from './MainAbout';

function MainComponent() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative" 
      
    >
      <div className="flex flex-col justify-center items-center min-h-screen" style={{ backgroundImage: `url(${Background})` }}>
        <div className='flex flex-col justify-center items-center content-normal mb-16 mt-72'>
          <p className='font-light text-sm block flex-grow-0 flex-shrink-0 self-auto order-0'>
            FrontEnd Developer
          </p>
          <h1 className='font-light text-7xl text-center'>
            Designing 
            <span className="uppercase"> smooth </span> 
            and 
            <span className="uppercase"> engaging </span>
            <br />
            <span className="block w-full text-center">user interfaces that amaze</span>
            <span className="block w-full text-center">and please.</span>
          </h1>
        </div>
        <MainAbout />
        <PortF />
      </div>
    </div>
  );
}

export default MainComponent;
