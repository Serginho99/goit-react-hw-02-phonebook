import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  text-align: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(33, 33, 33, 0.2);
  & + & {
    margin-top: 20px;
  }
`;

export const Text = styled.p`
  margin: 0;
  color: #757575;
  font-size: 20px;
`;

export const BtnDelete = styled.button`
  display: block;
  width: 50px;
  height: 25px;
  font-family: inherit;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 2px;
  border: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  transition: 250ms;
  :hover {
    color: #2196f3;
    background-color: lightblue;
  }
`;
