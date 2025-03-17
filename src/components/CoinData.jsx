import React, { useState, useEffect, useRef } from "react";
import "./styles/coindata.css";
import bitcoin from "./images/bitcoin_gaph.png";

const CarouselSection = ({ title, items }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="coin-carousel-section my-5">
      <h2>{title}</h2>
      <div className="coin-carousel-container">
        <button className="coin-carousel-btn coin-carousel-btn-left" onClick={scrollLeft}>
          &#8249;
        </button>
        <div className="coin-carousel-content" ref={carouselRef}>
          {items.map((item, index) => (
            <div className="coin-carousel-item" key={index}>
              <div className="coin-crypto-card">
                <div style={{display:'flex',alignItems:'center'}}>
                  <img src={item.img} style={{borderRadius:'50%',width:'26px'}}/>
                  <div>{item.name}
                    <span style={{
                      backgroundColor: parseFloat(item.change) < 0 ? 'rgb(249, 235, 235)' : '#EBF9F4',
                      color: parseFloat(item.change) < 0 ? 'rgb(113, 0, 0)' : 'green',
                      marginLeft:'10px'
                    }}>
                      {item.change}
                    </span>
                  </div>
                </div>
                <p>{item.price}</p>
                <img src={item.chart || bitcoin} alt={`${item.name} chart`} />
              </div>
            </div>
          ))}
        </div>
        <button className="coin-carousel-btn coin-carousel-btn-right" onClick={scrollRight}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

const CoinData = () => {
  const [likeItems, setLikeItems] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      const url = "https://api.coingecko.com/api/v3/search/trending";
      const options = {
        method: "GET",
        headers: { accept: "application/json", "x-cg-demo-api-key": "CG-r3nzTWEpqEyyaepqDV7qMpHy" },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch coin data");
        }

        const data = await response.json();
        const formattedItems = data.coins.map((coin) => ({
          name: coin.item.name,
          change: `${coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%`,
          price: `$${coin.item.data.price.toFixed(2)}`,
          chart: coin.item.data.sparkline,
          img: coin.item.thumb
        }));

        setLikeItems(formattedItems.slice(0, 3)); // First 3 items
        setTrendingItems(formattedItems.slice(3)); // Remaining items
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ width:'100%'}} className="bg-white coin-data-con">
      <CarouselSection title="You May Also Like" items={trendingItems} />
      <CarouselSection title="Trending Coins" items={trendingItems} />
    </div>
  );
};

export default CoinData;
