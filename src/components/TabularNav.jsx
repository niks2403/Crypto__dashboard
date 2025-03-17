import React, { useState, useEffect } from "react";
import "./styles/tabsNav.css";
const TabularNav = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [bitcoinData, setBitcoinData] = useState(null);

  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/bitcoin";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setBitcoinData(json.market_data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!bitcoinData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-md tabular-con" style={{ backgroundColor: "transparent" }}>
      {/* Tabs */}
      <div className="tabs-container border-b border-gray-200" style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`tab-button text-md font-medium py-3 text-left mx-3 ${
        activeTab === tab
          ? "text-blue-600 border-b-4 border-blue-600"
          : "text-gray-600 hover:text-blue-600"
      }`}
      style={{ minWidth: '120px' }} // Ensure each tab has a minimum width
    >
      {tab}
    </button>
  ))}
</div>



      {/* Tab Content */}
      <div className="my-5 p-6 bg-white" style={{ borderRadius: "10px" }}>
        {activeTab === "Overview" && (
          <div>
            {/* Performance Section */}
            <h2 className="text-lg font-bold mb-4">Performance</h2>
            <div className="flex justify-between items-center mb-6">
  <div className="text-center">
    <p className="text-sm text-gray-500">Today's Low</p>
    <p className="text-lg font-medium text-gray-800">
      $
      {bitcoinData.low_24h
        ? bitcoinData.low_24h.usd.toFixed(2)
        : "N/A"}
    </p>
  </div>
  <div className="flex-1 px-4">
  <div
  className="relative h-2 bg-gray-200 rounded-full"
  style={{
    background: 'linear-gradient(to right, green, yellow, red)',
  }}
>
  {bitcoinData.low_24h && bitcoinData.high_24h && bitcoinData.current_price ? (
    <>
      {/* Mark the current price */}
      <div
        className="absolute h-4 w-4 rounded-full transform -translate-y-1/2"
        style={{
          left: `${
            ((1-(bitcoinData.current_price.usd - bitcoinData.low_24h.usd) /
              (bitcoinData.high_24h.usd - bitcoinData.low_24h.usd))) *
            100
          }%`,top:'10px'
        }}
      >
        ▲
<p className="text-sm text-gray-500 mt-0 text-center" style={{top:'10px'}}>
      ${bitcoinData.current_price.usd}
    </p>
      </div>
    </>
  ) : null}
</div>

    
  </div>
  <div className="text-center">
    <p className="text-sm text-gray-500">Today's High</p>
    <p className="text-lg font-medium text-gray-800">
      $
      {bitcoinData.high_24h
        ? bitcoinData.high_24h.usd.toFixed(2)
        : "N/A"}
    </p>
  </div>
</div>


            {/* Fundamentals Section */}
            <h2 className="text-lg font-bold mb-4">Fundamentals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">Bitcoin Price</p>
    <p className="font-medium text-gray-800">${bitcoinData.current_price.usd}</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">Market Cap</p>
    <p className="font-medium text-gray-800">${bitcoinData.market_cap.usd}</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">24h Low / 24h High</p>
    <p className="font-medium text-gray-800">${bitcoinData.high_24h.usd}/ ${bitcoinData.low_24h.usd}</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">Market Cap Dominance</p>
    <p className="font-medium text-gray-800">38.343%</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">7d Low / 7d High</p>
    <p className="font-medium text-gray-800">$16,382.07 / $16,874.12</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">Volume / Market Cap</p>
    <p className="font-medium text-gray-800">{bitcoinData.market_cap_fdv_ratio}</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">Trading Volume</p>
    <p className="font-medium text-gray-800">${bitcoinData.total_volume.usd}</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">All-Time High</p>
    <p className="font-medium text-gray-800">$69,044.77 <span className="text-red-500">-75.6%</span></p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">Market Cap Rank</p>
    <p className="font-medium text-gray-800">#{bitcoinData.market_cap_rank}</p>
  </div>
  <div className="flex justify-between border-b border-gray-300 pb-2">
    <p className="text-gray-500">All-Time Low</p>
    <p className="font-medium text-gray-800">$67.81 <span className="text-green-500">2472.1%</span></p>
  </div>
</div>


          </div>
        )}
        {activeTab !== "Overview" && (
          <p className="text-gray-500 text-center py-10">
            Content for {activeTab} is not available yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default TabularNav;
