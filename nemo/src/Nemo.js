import React from "react";

const Nemo = (props) => { 

    const [count, setCount] = React.useState(3);
    console.log( " in nemo");
    const nemo_count = Array.from({length: count}, (v,i)=>(i));

    const addNemo = ()=>{
        setCount(count+1);
    }
    
    const removeNemo= ()=>{
        setCount (count > 0 ? count-1 : 0);
    }
    
    
    return (
        <div className="App">
       
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
        <button onClick={addNemo}>하나 추가</button>
        <button onClick={removeNemo}>하나 뺴기</button>

      </div>
    );
}

export default Nemo;