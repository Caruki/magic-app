import React from 'react';
import styled from '@emotion/styled';
// import isPropValid from '@emotion/is-prop-valid';

const CardImage = styled.img`
  width: ${props => (props.href ? '100%' : '100%')};
  flex-basis: auto;
  flex: 0 1;
  margin: 10px;

  @media (max-width: 450px) {
    width: 90%;
    flex: 0 1;
  }
`;

const CardLink = styled.a`
  width: 20%;
  margin: 10px;

  @media (max-width: 450px) {
    width: 90%;
  }
`;

//   {
//   shouldForwardProp: prop => isPropValid(prop) && prop === 'as'
// })(
//   props => ({
//   as: 'a'
// }))`

function CardExample({ card, href }) {
  return (
    <CardLink href={href}>
      <CardImage
        src={card.image_uris.border_crop}
        setURL={card.set_search_uri}
        alt=""
        href={href}
      />
    </CardLink>
  );
}

export default CardExample;
