import React from "react";
import ReactDOM from "react-dom";
import MyTitle from "./myTitle";

const MyFirstComponent = () => {
    return (
        <div>
            <MyTitle title="Ricky is Amazing" color="blue"/>
        </div>
    );
};

ReactDOM.render(<MyFirstComponent/>, document.getElementById("app"));