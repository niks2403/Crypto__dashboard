// src/Team.js
import React from 'react';
import './styles/team.css'; // Importing CSS for styling
import team1 from "./images/team1.png"
import team2 from "./images/team2.png"
import team3 from "./images/team3.png"
const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      designation: 'Designation here',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.',
      img:team3
    },
    {
      name: 'Elina Williams',
      designation: 'Designation here',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.',
      img:team2
    },
    {
      name: 'John Smith',
      designation: 'Designation here',
      description: 'Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas.',
      img:team1
    },
  ];

  return (
    <div className="team-container">
      <h2>Team</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <div className='flex-col justify-center items-center' style={{width:"120px",justifyContent:'center',alignItems:'center'}}>
            <img src={member.img} alt={member.name} style={{maxWidth:'120px'}}/>
            <h4 style={{textAlign:'center'}}>{member.name}</h4>
            <p style={{fontSize:'14px',textAlign:'center'}}>{member.designation}</p>
          </div>
          <div className="member-info">
            <p style={{color:'black'}}>{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;