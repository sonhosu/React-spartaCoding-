import React from "react";
import Nemo from "./Nemo";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      count: 3,
    };
    this.div = React.createRef();
  }

  hoverEvent = (e) => {
    console.log(e);
    console.log(e.target);

    e.target.style.backgroundColor= "red"
  }
  componentDidMount() {
    this.div.current.addEventListener("mouseover", this.hoverEvent);
  }

  componentWillUnmount() {
    this.div.current.removeEventListener("mouseover", this.hoverEvent);
  }

  addNemo = () => {
    this.setState({ count: this.state.count + 1 });

  }

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      alert('네모가 없어요 !')
    }
  }




  render() {
    const nemo_count = Array.from({ length: this.state.count }, (v, i) => (i));

    return (

      <div className="App" ref={this.div}>
        <Nemo />
        {nemo_count.map((num, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: '150px',
                height: '150px',
                backgroundColor: '#eee',
                margin: '10px'

              }}>
              nemo
            </div>
          )
        })}
        <button onClick={this.addNemo}>하나 추가</button>
        <button onClick={this.removeNemo}>하나 뺴기</button>

      </div>

    );
  }

}

export default App;
