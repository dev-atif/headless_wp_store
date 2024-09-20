'use client'
import React, { useEffect, useState } from "react";
 import Stepper from "awesome-react-stepper";
const Awosome_Stepper = () => {
  
 
 
  return (
    <div className="w-1/2 mx-auto">
      <div>
       
        <Stepper  >
          <div>
            <h1>Welcome to Awesome React Stepper</h1>
          </div>
          <div>
            <h1>Add your content here!!!</h1>
          </div>
          <div>
            <h1>Thank you for using Awesome React Stepper</h1>
          </div>
        </Stepper>
      </div>
    </div>
  );
};

export default Awosome_Stepper;
