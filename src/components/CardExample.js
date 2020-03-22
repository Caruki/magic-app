import React from 'react';
import styled from '@emotion/styled';
// import isPropValid from '@emotion/is-prop-valid';

const CardImage = styled.img`
  width: 20%;
  flex-basis: auto;
  flex: 0 1;
  margin: 10px;
  cursor: ${props => (props.href ? 'pointer' : 'default')};

  @media (max-width: 450px) {
    width: 90%;
    flex: 0 1;
  }
`;

// const CardLink = styled('a', {
//   shouldForwardProp: prop => isPropValid(prop) && prop === 'as'
// })(props => ({
//   as: props.as,
//   href: props.href,

// }));

function CardExample({ card, as, href }) {
  return (
    <CardImage
      src={card.image_uris.border_crop}
      setURL={card.set_search_uri}
      alt=""
      as={as}
      href={href}
    ></CardImage>
  );
}

export default CardExample;
