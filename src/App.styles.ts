import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px;
  .header {
    width: 100%;
    height: 60px;
    background: #ee67c180;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: 50px 0;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px
      24px;
    border-radius: 2px;
  }
  div.header > h3.heading {
    color: deepskyblue;
    font-size: 30px;
    font-weight: 500;
  }
`;

export const StyledButton = styled(IconButton)`
  color: white !important;
`;
