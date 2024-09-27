import React from "react";
import InputFileds from "../InputFileds";

const PersonelInformation = ({formik}:{formik:any}) => {
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
              <InputFileds
            
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.FirstName}
                name="FirstName"
                label={"First Name"}
              />
            </div>
            <div className="w-1/2">
              <InputFileds
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.LastName}
                name="LastName"
                label="Last Name"
              />
            </div>
          </div>
          <div>
            <InputFileds
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Address}
              name="Address"
              label="Address"
            />
          </div>
          <div className="flex gap-8 mt-4">
            <div className="w-1/2">
              <InputFileds
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.City}
                name="City"
                label={"City"}
              />
            </div>
            <div className="w-1/2">
              <InputFileds
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.State}
                name="State"
                label="State"
              />
            </div>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="w-1/2">
              <InputFileds
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.PostCode}
                name="PostCode"
                label={"Post Code"}
              />
            </div>
            <div className="w-1/2">
              <InputFileds
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Country}
                name="Country"
                label="Country"
              />
            </div>
          </div>
          <div className="flex gap-8 mt-4">
            <div className="w-1/2">
              <InputFileds
              type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Email}
                name="Email"
                label={"Email Address"}
              />
            </div>
            <div className="w-1/2">
              <InputFileds
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Number}
                name="Number"
                label="Number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonelInformation;
