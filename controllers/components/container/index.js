import React from "react";
import "./Container.css";

const Container = props => 
    <main className="container">
        {/* passes other components through children in Game.js */}
        {props.children}
    </main>;

export default Container;