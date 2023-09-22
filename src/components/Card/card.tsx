import React from 'react';
import themeIcons from '../themeIcons/themeIcons';
import './card.scss';

interface CardProps {
  title: string;
  description: string;
  onClick: () => void; // Function to be called when the card is clicked
}

const Card: React.FC<CardProps> = ({ title, description, onClick }) => {
  const iconURL = themeIcons[title];

  return (
    // Using onClick handler directly on the card container
    <div className='card' onClick={onClick} style={{ cursor: 'pointer' }}>
      {iconURL && (
        <div className='icon-container'>
          <img src={iconURL} alt={`${title} Icon`} className='icon' />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
