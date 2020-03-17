import React from 'react';
import styled from '@emotion/styled';

const CardImage = styled.img`
  width: 20%;
  flex-basis: auto;
  flex: 0 1;
  margin: 10px;
  @media (max-width: 450px) {
    width: 90%;
    flex: 0 1;
  }
`;

function CardExample({ card }) {
  return (
    <CardImage
      src={card.image_uris.border_crop}
      setURL={card.set_search_uri}
      alt=""
    ></CardImage>
  );
}

export default CardExample;
