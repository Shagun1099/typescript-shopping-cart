import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 10px;
  height: 100%;

  button {
    border-radius: 0 0 10px 10px;
    background: deepskyblue;
    color: white;
    font-weight: 600;
    padding: 10px;
  }
  img {
    height: 280px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
  div p.description {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
    letter-spacing: -0.5px;
  }
`;
