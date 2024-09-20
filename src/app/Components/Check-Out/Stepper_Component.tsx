'use client'

import React, { useState } from "react";
import { Step, Stepper } from "react-form-stepper";

const Stepper_COmponent = () => {
   const [activeStep, setActiveStep] = useState(0);

   const handleNext = () => {
     setActiveStep((prevStep) => prevStep + 1);
   };

   const handleBack = () => {
     setActiveStep((prevStep) => prevStep - 1);
   };
 const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  return (
    <div>
      <div className="flex items-center w-1/2 mx-auto">
        {steps.map((label, index) => (
          <React.Fragment key={label}>
            <Step label={label}  color="00000"/>
            {index < steps.length - 1 && (
              <div
                className={`h-1 -mt-8 flex-1 transition-all duration-300 ${
                  index < activeStep ? "bg-blue-500" : "bg-white"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {activeStep === 0 && <div>Step 1 Content</div>}
      {activeStep === 1 && <div>Step 2 Content</div>}
      {activeStep === 2 && <div>Step 3 Content</div>}

      <div className="mt-4">
        {/* Back Button */}
        {activeStep > 0 && (
          <button onClick={handleBack} className="mr-2 bg-gray-300 p-2 rounded">
            Back
          </button>
        )}

        {/* Next/Finish Button */}
        {activeStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 p-2 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button className="bg-green-500 p-2 text-white rounded">
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper_COmponent;
