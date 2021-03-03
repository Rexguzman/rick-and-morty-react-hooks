import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #2680c1;
  color: white;

  div {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 10px 0;
  }

  .logo {
    margin-left: 20px;
    padding: 5px;
  }

  nav figure {
    margin-right: 20px;
    padding: 7px;
  }
  nav figure:hover {
    cursor: pointer;
    border: 2px solid white;
    border-radius: 50%;
    padding: 5px;
  }
`;
