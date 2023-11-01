import React from "react";
import "./whoUS.css";
import date from "./../assets/date.png";
import experience from "./../assets/experience.png";
import support from "./../assets/soutien-technique.png";
import carriere from "./../assets/carriere.png";

const WhoUs = () => {
  return (
    <div className="section-us">
      <h2>Why Choose us</h2>
      <p>At HouseNiture, we offer compelling reasons to partner with us:</p>
      <div className="container-us">
        <div className="item-us">
          <img src={date} alt="" width={"40%"} height={"auto"} />
          <h1>Timely</h1>
          <p>Timely Project Delivery: Committed to meeting deadlines without compromising quality, ensuring on-time project completion.</p>
        </div>
        <div className="item-us">
          <img src={experience} alt="" width={"40%"} height={"auto"} />
          <h1>experience</h1>
          <p>
            Expert Craftsmanship: Our skilled team delivers quality workmanship,
            ensuring durable and beautiful construction.
          </p>
        </div>
        <div className="item-us">
          <img src={carriere} alt="" width={"40%"} height={"auto"} />
          <h1>carriere</h1>
          <p>
            Innovation & Sustainability: Utilizing modern techniques and
            eco-friendly materials, we create innovative, sustainable solutions.
          </p>
        </div>
        <div className="item-us">
          <img src={support} alt="" width={"40%"} height={"auto"} />
          <h1>Support</h1>
          <p>
            Client-Centered Approach: Your aspirations are our priority. We
            collaborate closely to transform your vision into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoUs;
