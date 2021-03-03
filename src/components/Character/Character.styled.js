import styled from 'styled-components';

export const CharacterContainer = styled.div`
  background-color: ${({ theme }) => theme.secundary};
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  border-radius: 7px;
  color: white;

  figure svg {
    position: absolute;
    right: -20px;
    top: -20px;
    cursor: pointer;
  }

  figure svg circle {
    fill: #0b94f6;
  }
  figure img {
    width: 80%;
    border: 1px solid black;
    border-radius: 50%;
  }
  h3 {
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #0b94f6;
    border-radius: 7px;
  }
  .img {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
`;
