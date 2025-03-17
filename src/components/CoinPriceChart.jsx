import React from "react";
import TradingViewWidget from "./TradingViewWidget";

const CoinPriceChart = () => {
  return (
    <div className="mx-auto bg-white rounded-lg p-6 w-100 my-5" style={{height:'600px'}}>
      {/* Header Section */}
      <TradingViewWidget/>
    </div>
  );
};

export default CoinPriceChart;
