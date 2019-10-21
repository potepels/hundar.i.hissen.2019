import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_hissPanel.scss';

class HissPanel extends Component {

    render() {
        // let reversedDogData = this.props.DogData.reverse();
        console.log(this.props.DogData);
        let buttons = this.props.DogData.map((floor, index) => {
            if (floor.floor <= this.props.openFloors) {
                return (
                    <Link to={`#${floor.floor}`} className="c_hiss-panel__button c_hiss-panel__button--active" key={`hissPanelButton-${index}`}>
                        <span>{floor.floor}</span>
                    </Link>
                )
            }
            return (
                <span
                    key={`hissPanelButton-${index}`}
                    className="c_hiss-panel__button c_hiss-panel__button--hidden">
                    <span>{floor.floor}</span>
                </span>
            )
        })


        return (
            <div className="c_hiss-panel">
                <h3>Velg etasje{this.props.openFloors}</h3>
                <nav role="navigation">
                    {buttons}
                </nav>

            </div>
        );
    }
}

export default HissPanel;