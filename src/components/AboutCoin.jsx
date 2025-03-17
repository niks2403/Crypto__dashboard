import React from "react";
import "./styles/aboutCoin.css"; // Ensure to include the CSS for styling
import about_img1 from "./images/about_rec1.png"
import about_img2 from "./images/about_rec2.png"
const AboutCoin = () => {
  return (
    <div className="about-bitcoin-container w-100">
      {/* About Bitcoin Section */}
      <div className="about-section">
        <h2>About Bitcoin</h2>
        <h3>What is Bitcoin?</h3>
        <p>
          Bitcoin's price today is <b>US$16,951.82</b>, with a 24-hour trading volume of <b>$19.14 B</b>. BTC is{" "}
          <b>+0.36%</b> in the last 24 hours. It is currently <b>-7.70%</b> from its 7-day all-time high of $18,366.66,
          and <b>3.40%</b> from its 7-day all-time low of $16,394.75. BTC has a circulating supply of <b>19.24 M BTC</b>{" "}
          and a max supply of <b>21 M BTC</b>.
        </p>
      </div>

      {/* Lorem Ipsum Section */}
      <div className="lorem-section">
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus
          urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum
          sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus.
        </p>
        <p>
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc
          sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim
          dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
          faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
          phasellus. Integer pellentesque enim convallis ultricies at.
        </p>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
          semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet
          dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>

      {/* Already Holding Bitcoin Section */}
      <div className="holding-bitcoin-section" style={{border:'2px solid #e9e9e9' , borderWidth:'2px 0 2px 0'}}>
        <h2>Already Holding Bitcoin?</h2>
        <div className="actions-container">
          <div className="action-card blue flex">
            <img
              src={about_img2} 
              alt="Calculate your Profits"
            />
            <div className="mx-3 inter-700 flex flex-col" style={{alignItems:'flex-start'}}>
            <h4 style={{fontSize:'20px', color:'white'}}>Calculate your Profits</h4>
            <button className="check-button">Check Now →</button>
            </div>
          </div>
          <div className="action-card orange flex">
            <img
              src={about_img1}
              alt="Calculate your tax liability"
            />
            <div className="mx-3 inter-700 flex flex-col" style={{alignItems:'flex-start'}}>
            <h4 style={{fontSize:'20px',color:'white'}}>Calculate your tax liability</h4>
            <button className="check-button">Check Now →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer-section">
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing
          semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet
          dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
        </p>
      </div>
    </div>
  );
};

export default AboutCoin;
