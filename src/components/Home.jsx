import React, { useState, useEffect } from "react";
import CoinPriceChart from "./CoinPriceChart";
import TabularNav from "./TabularNav";
import Sentiment from "./Sentiment";
import AboutCoin from "./AboutCoin";
import Takenomics from "./Takenomics";
import Team from "./Team";
import CoinData from "./CoinData";
import KoinXCard from "./KoinXCard";
import TrendingCoins from "./TrendingCoins";
import "./styles/styles.css";

// Custom hook to detect screen size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const Home = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div className="home-container">
        <div className="home-first">
          <p style={{ position: "absolute", top: "-10px" }}>
            Cryptocurrencies &#8250;&#8250;{" "}
            <span style={{ fontWeight: "bold" }}>Bitcoin</span>
          </p>
          <CoinPriceChart />
          <TabularNav />
          <Sentiment />
          <AboutCoin />
          <Takenomics />
          <Team />
        </div>
        <div className="home-second">
          {width <= 500 && <CoinData />} {/* Render on small screens */}
          <KoinXCard />
          <TrendingCoins />
        </div>
        {width > 500 && <CoinData />} {/* Render on larger screens */}
      </div>
    </>
  );
};

export default Home;
