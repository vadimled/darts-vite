import React, { FC } from 'react';

interface ILanding {
  name?: string;
}
const Landing: FC<ILanding> = ({ name = 'HOME' }) => {
  return <div>{name}</div>;
};

export default Landing;
