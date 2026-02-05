import React from 'react';
import { Container } from 'react-bootstrap';
import cardStyles from './Card.module.css';

const Card = ({children}) => {
  return (
    <Container className={`${cardStyles.Container} ${cardStyles.Content}`}>
      {children}
    </Container>
  )
}

export default Card;