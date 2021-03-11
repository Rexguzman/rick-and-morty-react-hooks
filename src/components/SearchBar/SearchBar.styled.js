import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  max-width: 800px;

  input {
    width: 100%;
    margin: 40px 0;
    border-radius: 15px;
    height: 35px;
    background-color: transparent;
    border: solid 2px ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.font};
    padding: 0 20px;
  }
  input:focus {
    outline-style: none;
    border-color: #0b94f6;
  }
`;
