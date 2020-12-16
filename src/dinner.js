import React from "react";

function Dinner(props){
    return (
        <div>
    <h1> Today I am serving {props.dish} </h1> ;
    <h1> Today I am serving {props.sweet} </h1>;
        </div>
    );

}
export default Dinner