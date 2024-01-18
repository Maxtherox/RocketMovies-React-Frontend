import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container} from './styles'


export const MovieRating = ({ rating, theme, size = 12, width = 12, ...rest}) => {
  const renderStars = () => {
    const totalStars = 5;
    const filledStars = Math.round(rating);

    return Array.from({ length: totalStars }, (_, index) => (
      <svg key={index} width="20" height="20" viewBox="0 0 24 24" fill={index < filledStars ? "#FF859B" : 'none'} stroke="#FF859B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <Container size={size} width={width}>
      {renderStars()}
      </Container>
  );
};

