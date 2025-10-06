import React from "react";
import austin from "../../assets/austin.png";

const Home = () => {
  return (
    <div className="md:flex justify-between items-center p-3 lg:p-35">
      <div className="space-y-3 md:space-y-16">
        <p className="text-primary">Sale up to 70% off</p>
        <div>
          <h2 className="text-2xl md:text-5xl mb-2 font-semibold">New Collection For Fall</h2>
          <p>Discover all the new arrivals of ready-to-wear collection.</p>
        </div>
        <button className="btn btn-primary px-5 py-4 md:mb-0">SHOP NOW</button>
      </div>
      <div className="bg-secondary rounded-lg">
        <img className="ms-5 mb-5 -mt-5 -mr-5" src={austin} alt="austin" />
      </div>
    </div>
  );
};

export default Home;
