import React from 'react';
import CardsWrapper from '../components/CardsWrapper';
import CardExample from '../components/CardExample';
import styled from '@emotion/styled';

const NewSetHeading = styled.h1`
  font-size: 2rem;
  font-family: 'MPlantin';
  color: rgb(183, 225, 241);
  text-shadow: 6px -1px 5px rgba(7, 29, 53, 0.774);
  text-align: center;
  margin: 15px;
`;

export default function NewSet() {
  const [newSet, setCardSet] = React.useState([]);

  React.useEffect(() => {
    async function getSet() {
      const response = await fetch(
        'https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints'
      );
      const newSet = await response.json();
      setCardSet(newSet);
    }
    getSet();
  }, []);

  return (
    <>
      <NewSetHeading>Theros Beyond Death</NewSetHeading>
      <CardsWrapper>
        {newSet.data?.map(card => (
          <CardExample card={card} />
        ))}
      </CardsWrapper>
    </>
  );
}
