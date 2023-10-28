import React, { useState } from 'react';
import './VehicleTracking.css';

function VehicleTracking({ inactive }) {
  const [showSuccessPopup, SetShowSuccessPopup] = useState(true);
  const [vehicle, setVehicle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={`contact-body ${!inactive ? 'contact-inactive' : ''} `}>
      <div class="section-header">
        <div class="contact-container">
          <h2>Vehicle Tracking</h2>
          <p>Track your Vehicle by providing the vehicle number.</p>
        </div>
      </div>
      <div class="row">
        <div class="contact-info">
          <div className="formCenter">
            <form className="formFields" onSubmit={handleSubmit}>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  Vehicle Number
                </label>
                <input
                  type="text"
                  id="vehicle"
                  className="formFieldInput"
                  placeholder="Enter Vehicle Number"
                  name="vehicle"
                  value={vehicle}
                  onChange={(e) => {
                    e.preventDefault();
                    setVehicle(e.target.value);
                  }}
                />
              </div>
              <div className="formField">
                <button className="formFieldButton" onClick={handleSubmit}>
                  GetDetails
                </button>{' '}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleTracking;
