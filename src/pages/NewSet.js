import React from 'react';
import './NewSet.css';

export default function NewSet() {
  const [newSet, setCardSet] = React.useState([]);

  React.useEffect(() => {
    async function getSet() {
      const response = await fetch(
        'https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints'
      );
      const newSet = await response.json();
      console.log(newSet);
      setCardSet(newSet);
    }
    getSet();
  }, []);

  console.log(newSet);

  function showCards() {
    const cards = newSet.data?.map(setCard => (
      <img
        className="card-example"
        key={setCard.image_uris.border_crop.toString()}
        src={setCard.image_uris.border_crop}
        alt=""
      ></img>
    ));
    return <div className="cards-wrapper">{cards}</div>;
  }

  return (
    <>
      <div className="heading-newset">Theros Beyond Death</div>

      <div>{showCards()}</div>
    </>
  );
}
