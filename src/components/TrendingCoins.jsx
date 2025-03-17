import React, { useEffect, useState } from 'react';

const TrendingCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://api.coingecko.com/api/v3/search/trending';
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-r3nzTWEpqEyyaepqDV7qMpHy' },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch trending coins');
        }
        return res.json();
      })
      .then((data) => {
        const formattedData = data.coins
          .slice(0, 3) // Only take the top three coins
          .map((coin) => ({
            name: coin.item.name,
            symbol: coin.item.symbol,
            img: coin.item.thumb,
            change: coin.item.data?.price_change_percentage_24h?.usd?.toFixed(2) || 'N/A',
          }));
        setCoins(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg w-full my-3">
      <h2 className="text-lg font-semibold mb-4">Trending Coins (24h)</h2>
      <ul>
        {coins.map((coin, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-b-0"
          >
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center mr-2`}
              >
                <span className="text-sm font-semibold">
                  <img src={coin.img} alt={coin.name} style={{borderRadius:'50%'}}/>
                </span>
              </div>
              <span className="font-medium">
                {coin.name} <span className="text-gray-500">({coin.symbol})</span>
              </span>
            </div>
            <span
              className="font-semibold text-white px-2 py-1 rounded"
              style={{
                backgroundColor: parseFloat(coin.change) < 0 ? 'rgb(249, 235, 235)' : '#EBF9F4',
                color: parseFloat(coin.change) < 0 ? 'rgb(113, 0, 0)' : 'green',
              }}
            >
              {`${coin.change > 0 ? '▲' : '▼'}${coin.change}`}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
