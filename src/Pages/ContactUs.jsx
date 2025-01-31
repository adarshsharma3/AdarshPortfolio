import React from 'react';
import Form from './Form';
import Hover from './Hover';

const CombinedComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h3 className="text-3xl sm:text-6xl font-bold text-center mb-8">Contact Me</h3>   
      <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 w-full ">
        <div className="  sm:w-full  md:w-1/3  overflow-hidden  flex justify-center">
          {/* Ensure Hover component doesn't overflow */}
          <Hover />
        </div>
        <div className="w-full md:w-2/3">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CombinedComponent;
