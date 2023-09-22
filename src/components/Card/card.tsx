import React from 'react';
import themeIcons from '../themeIcons/themeIcons';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  // Get the icon URL based on the title (theme)
  const iconURL = themeIcons[title];

  return (
    <div className='card'>
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
