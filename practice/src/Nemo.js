import React from "react";

const Nemo = (props) => {
    //useState 사용방법
    //const[state로사용할변수명, state값을바꿔줄함수명] = React.useState(state 초기값);

    const new_list = props.list;

    return (
        <div>
            {new_list.map((list, idx) => {
                return (
                    <div key={idx}>
                        {list}
                    </div>
                );
            })}
        </div>
    );
};



export default Nemo;