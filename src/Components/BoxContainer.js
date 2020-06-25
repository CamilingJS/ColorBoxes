import React, { Component } from 'react';
import Box from "../Components/Box";
import "../Components/BoxContainer.css";

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 24,
        allColors: ["red", "orange", "yellow", "green", "blue", "purple"]
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
        <Box colors={this.props.allColors} />
        ));
        return <div className="BoxContainer">{boxes}</div>;

    }
}
export default BoxContainer; 