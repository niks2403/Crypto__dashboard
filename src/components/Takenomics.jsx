import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import "./styles/takenomics.css"; //

const data = [
  { name: "Crowdsale investors", value: 80, color: "#007bff" }, // Blue
  { name: "Foundation", value: 20, color: "#ff9800" }, // Orange
];

const Tokenomics = () => {
  return (
    <div className="tokenomics-container">
      <h2>Tokenomics</h2>
      <h3>Initial Distribution</h3>
      <div className="tokenomics-content">
        {/* Pie Chart */}
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                formatter={(value, entry) => (
                  <span style={{ color: entry.color, fontSize: "14px" }}>
                    {value}: {entry.payload.value}%
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Description */}
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel
            consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
            eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam
            fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget
            in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Voluptate ipsum aliquet
            odio nisi eu ac risus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
