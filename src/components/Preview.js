import React from 'react';
import CardExample from './CardExample';
import CardsWrapper from './CardsWrapper';

export default function Preview({ name }) {
  const [cardExamples, setCardExamples] = React.useState([]);

  React.useEffect(() => {
    async function getCards() {
      const responses = await Promise.all([
        fetch(
          'https://api.scryfall.com/cards/search?order=name&q=type%3Agod+set%3Athb'
        ),
        fetch(
          'https://api.scryfall.com/cards/49d2a680-4f3b-4bfa-b77b-d2dfaced9f23'
        ),
        fetch(
          'https://api.scryfall.com/cards/e6784910-0204-4a39-bb38-50daa03e94c2'
        ),
        fetch(
          'https://api.scryfall.com/cards/83e61813-c4c8-4e80-8808-ac5107966ee3'
        ),
        fetch(
          'https://api.scryfall.com/cards/43f7dad3-fd67-4a6b-8daa-dbda75d995c5'
        ),
        fetch(
          'https://api.scryfall.com/cards/eee1d0b9-64c0-466e-978d-31e744f156d6'
        ),
        fetch(
          'https://api.scryfall.com/cards/2d70ea49-8911-4361-8515-a78f34f6e721'
        )
      ]);
      const results = await Promise.all(
        responses.map(response => response.json())
      );
      const cardExamples = results;
      setCardExamples(cardExamples);
    }
    getCards();
  }, []);

  function getNewSetCards() {
    return cardExamples[0]?.data;
  }

  function getAllSetCards() {
    return cardExamples?.slice(1);
  }

  function getCardsBySet(setName) {
    if (setName === 'newSet') {
      return getNewSetCards();
    } else if (setName === 'allSets') {
      return getAllSetCards();
    } else {
      return [];
    }
  }
  const isAllSet = name === 'allSets';
  const cards = getCardsBySet(name);

  return (
    <CardsWrapper>
      {isAllSet &&
        cards?.map(card => (
          <CardExample
            src={card.image_uris.border_crop}
            key={card.id}
            card={card}
            href={`/all/${card.set_name}`}
          />
        ))}

      {!isAllSet &&
        cards?.map(card => (
          <CardExample
            card={card}
            key={card.id}
            src={card.image_uris.border_crop}
          />
        ))}
    </CardsWrapper>
  );
}
