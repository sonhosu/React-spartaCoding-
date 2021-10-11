import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
function App() {
  return (
    <div className="App">
      <Mystyled bgColor={"red"}>HelloReact</Mystyled>
      <Name>안녕하세요</Name>
    </div>
    
  );
}
const Name = styled.h1`
  width:200px;
  padding: 50px;
  background-color: blue;

`;


const Mystyled = styled.div`
  width: 50vw;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  &:hover {
    background-color: #ddd;
  }
  background-color: ${(props) => (props.bgColor)}
`;

export default App;
