import React from "react";
import "./Dashboard.css";
import Slider from "react-slick";

function Dashboard({inactive}) {
    
return(
    <div className={`contact-body ${!inactive ? "contact-inactive" : ""} `}>
        <div style={{textAlign: "center", padding: "20px"}}>
        Vehicle tracking systems with CCTV cameras utilize a network of strategically placed cameras to monitor and record vehicle moments.
        These systems capture real time video footage of vehicles in their operational environment offering a visual record of traffic conditions and a vehicle behaviour.
        CCTV cameras can be integrated with license plate recognition technology to identify and track specific vehicles automatically.
        This technology is commonly used for security and law enforcement purposes, as it can assist in identifying and locating suspect vehicles.

        <br/>
        <br/>
        Vehicle tracking through CCTV can also enhance traffic management by providing valuable insights into congestion, road conditions and accidents.
        Buisness can use these systems for fleet management to monitor to location and behavior of their vehicles, ensuring compliance with safety and operational needs.
        CCTV footage can be stored for historical reference, which cab be crucial for accident investigations, insurance claims or legal disputes.
        These systems often employ analytics to detect unusual driving patterns, such as apeeding, sudden stops or erratic behavior which can improve driver safety.  
        </div>
        
      </div>
);
}

export default Dashboard;