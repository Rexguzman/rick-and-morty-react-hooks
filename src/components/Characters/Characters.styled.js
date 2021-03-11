import styled from 'styled-components';

export const CharactersContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: auto;
  justify-content: center;
  h2 {
    margin:  20px 0;
    width: 100%;
  }
`;

export const EmpyFavoriteContainer = styled.section`

  h2 {
    margin: 20px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 90px 0;
  }

  p {
    font-size: 3rem;
  }
`;
