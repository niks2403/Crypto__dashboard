import React from "react";
import KoinImg from "./images/KoinXCard.png";

const KoinXCard = () => {
  return (
    <div
      className="text-white p-8 w-100 mx-auto flex flex-col items-center my-5"
      style={{ background: "#0052FE",borderRadius:'15px' }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Get Started with KoinX for FREE
      </h2>
      <p className="text-center mb-6 text-white">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <div className="flex justify-center items-center mb-6">
        <img
          src={KoinImg}
          alt="KoinX Illustration"
          className="w-40"
        />
      </div>
      <button className="bg-white text-blue-500 font-semibold py-2 my-5 px-4 rounded-lg shadow hover:bg-gray-100 transition">
        Get Started for FREE →
      </button>
    </div>
  );
};

export default KoinXCard;
