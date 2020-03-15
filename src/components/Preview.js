import React from 'react';
import './Preview.css';

export default function Preview(props) {
  // const cardExamples = [];
  const [cardExamples, setCard] = React.useState([]);

  React.useEffect(() => {
    async function getCards() {
      const responses = await Promise.all([
        fetch(
          'https://api.scryfall.com/cards/search?order=name&q=type%3Agod+set%3Athb'
        ),
        fetch(
          'https://api.scryfall.com/cards/2d70ea49-8911-4361-8515-a78f34f6e721'
        ),
        fetch(
          'https://api.scryfall.com/cards/e6784910-0204-4a39-bb38-50daa03e94c2'
        ),
        fetch(
          'https://api.scryfall.com/cards/43f7dad3-fd67-4a6b-8daa-dbda75d995c5'
        ),
        fetch(
          'https://api.scryfall.com/cards/49d2a680-4f3b-4bfa-b77b-d2dfaced9f23'
        ),
        fetch(
          'https://api.scryfall.com/cards/83e61813-c4c8-4e80-8808-ac5107966ee3'
        ),
        fetch(
          'https://api.scryfall.com/cards/83e61813-c4c8-4e80-8808-ac5107966ee3'
        )
      ]);
      const results = await Promise.all(
        responses.map(response => response.json())
      );
      const cardExamples = results;
      setCard(cardExamples);
    }
    getCards();
  }, []);

  function newSet() {
    cardExamples[0].data.map(setCard => {
      let imageURL = setCard.image_uris.border_crop;
      console.log(imageURL);
      return imageURL;
    });
  }

  function showCards(setName) {
    if (setName === 'newSets') {
      return newSet();
    } else return;
  }

  return (
    <div className="previews-wrapper">
      <img className="card-example" src={showCards(props.name)} alt=""></img>
    </div>
  );
}
