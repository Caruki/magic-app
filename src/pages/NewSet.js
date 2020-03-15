import React from 'react';

export default function NewSet() {
  // const newSetIsTrue = true;
  // const [newSet, setCardSet] = React.useState([]);

  // React.useEffect(() => {
  //   async function getSet() {
  //     const response = await fetch(
  //       'https://api.scryfall.com/cards/search?order=set&q=e%3Athb&unique=prints'
  //     );
  //     const newSet = await response.json();
  //     console.log(newSet);
  //     setCardSet(newSet);
  //   }
  //   getSet();
  // }, [newSetIsTrue]);

  // console.log(newSet);

  // function showCards() {
  //   const cards = newSet.data.map(setCard => (
  //     <img
  //       key={setCard.image_uris.border_crop.toString()}
  //       src={setCard.image_uris.border_crop}
  //       alt=""
  //     ></img>
  //   ));
  //   return <div>{cards}</div>;
  // }

  return <div>New Set</div>;
}
