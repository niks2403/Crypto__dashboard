import React, { useState } from 'react';
import './styles/sentiment.css';
import senti_1 from "./images/sentiment-1.png"
import senti_2 from "./images/sentiment-2.png"
const Sentiment = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const events = [
        {
            icon: senti_1,
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: "Dui vel quis dignissim mattis enim tincidunt. Ac phasellus risus et faucibus metus quis. Amet sapien quam viverra adipiscing condimentum.",
            style: "blue",
        },
        {
            icon: senti_2,
            title: "Lorem ipsum dolor sit amet consectetur.",
            description: "Ac phasellus risus et faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Sed vitae sit nisi viverra natoque lacinia libero enim.",
            style: "green",
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? events.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === events.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="sentiment-container w-100 my-5">
            <h2>Sentiment</h2>

            <div className="key-events">
                <h3>Key Events</h3>
                <div className="carousel">
                    <div
                        className="carousel-track"
                        style={{
                            transform: `translateX(-${currentIndex * 50}%)`,
                        }}
                    >
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className={`event-card ${event.style}`}
                            >
                                <img src={event.icon} className="icon"/>
                                <div className="content">
                                    <h4>{event.title}</h4>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="carousel-controls">
                    <button onClick={handlePrev}>&#8249;</button>
                    <button onClick={handleNext}>&#8250;</button>
                </div>
            </div>

            <div className="analyst-estimates">
                <h3>Analyst Estimates</h3>
                <div className="estimate-container">
                    <div className="percentage">
                        <span className="large">76%</span>
                    </div>
                    <div className="bars">
                        <div className="bar">
                            <span className="label">Buy</span>
                            <div
                                className="bar-fill buy"
                                style={{ width: "76%" }}
                            ></div>
                        </div>
                        <div className="bar">
                            <span className="label">Hold</span>
                            <div
                                className="bar-fill hold"
                                style={{ width: "8%" }}
                            ></div>
                        </div>
                        <div className="bar">
                            <span className="label">Sell</span>
                            <div
                                className="bar-fill sell"
                                style={{ width: "16%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sentiment;
