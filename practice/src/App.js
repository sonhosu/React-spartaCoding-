import logo from './logo.svg';
import './App.css';
import react from 'react';
import Nemo from './Nemo';
import React from 'react';

class App extends react.Component{
  constructor(props){
    super(props);
    
    this.state = {
      count : 3,
      list : ['qqq','www','eee'],
    };
    this.text = React.createRef();
    
  }

  addNemo = () =>{
    
    this.setState({count:this.state.count +1});
  }

  removeNemo = ()=> {
    if(this.state.count > 0){
    this.setState({count:this.state.count -1});
    }else
    alert("네모가 없습니다.")

    
  
  }
  render() {
    const nemo_count = Array.from({length:this.state.count}, (k,i)=> (i))
    console.log(nemo_count);
    return(
      <div className="App"> 
        <Nemo/>
        <div style={{
          position:'fixed',
          left:'0',
          bottom:'0'
        }}>
          <input type="text" ref={this.text}/>
          <button>추가하기</button>
        </div>
      </div>

    )
  }
}


export default App;
