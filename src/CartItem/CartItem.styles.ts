import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  div {
    flex: 1;
  }
  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .buttons > button {
    background: #ee67c180;
    color: deepskyblue;
    font-size: 30px;
    height: 50px;
    width: 40px;
  }

  img {
    max-width: 150px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
