import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './_floorDisplay.scss';

class FloorDisplay extends Component {

    render() {
        return (
            <div className="c_floor-display">
                <span>Du befinner deg i {floor}. etasje</span>
            </div>
        );
    }
}

export default FloorDisplay;