import styled from '@emotion/styled';

const CardExample = styled.img`
  width: 20%;
  flex-basis: auto;
  flex: 0 1;
  margin: 10px;
  @media (max-width: 450px) {
    width: 90%;
    flex: 0 1;
  }
`;

export default CardExample;
