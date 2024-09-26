import React from "react";
import InputFileds from "../InputFileds";

const PersonelInformation = () => {
  return (
    <div>
      <div>
        <div className="my-14">
          <div>
            <h1 className="text-2xl font-semibold tracking-wider uppercase">
              Personel Information
            </h1>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="w-1/2">
              <InputFileds label={"First Name"} />
            </div>
            <div className="w-1/2">
              <InputFileds label="Last Name" />
            </div>
          </div>
          <div>
            <InputFileds label="Address" />
          </div>
          <div className="flex gap-8 mt-4">
            <div className="w-1/2">
              <InputFileds label={"City"} />
            </div>
            <div className="w-1/2">
              <InputFileds label="State" />
            </div>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="w-1/2">
              <InputFileds label={"Post Code"} />
            </div>
            <div className="w-1/2">
              <InputFileds label="Country" />
            </div>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="w-1/2">
              <InputFileds label={"Email Address"} />
            </div>
            <div className="w-1/2">
              <InputFileds label="Number" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonelInformation;
