import logo from './logo.svg';
import styled,{keyframes} from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box></Box>
    </div>
  );
}

const move = keyframes`
  0%{
    top: 20px;
    opacity:1;
  }
  30%{
    top: 50px;
  }


  50%{
    top:  200px;
    opacity:0;
  }

  80%{
    top 150px;
  }

  100%{
    top:20px;
    opacity:1;
  }

`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  
  border-radius:50px;
  background-color:green;
  position: absolute;
  top: 20px;
  left 20px;
  opacity:1;
  animation: ${move} 2s 1s infinite;

`;




export default App;
