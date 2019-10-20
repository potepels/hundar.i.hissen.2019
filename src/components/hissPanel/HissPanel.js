import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_hissPanel.scss';

class HissPanel extends Component {

    render() {
        const floors = [];

        let buttons = this.props.DogData.map((floor, index) => {
            if (index < this.props.openFloors) {
                return (
                    <Link to={`/${index}`} className="c_hiss-panel__button c_hiss-panel__button--active" key={index}>
                        <span>{index + 1}</span>
                    </Link>
                )
            }
            return (
                <span
                    key={index}
                    className="c_hiss-panel__button c_hiss-panel__button--hidden">
                    <span>{index + 1}</span>
                </span>
            )

        })


        return (
            <div className="c_hiss-panel">
                <h3>Velg etasje</h3>
                <nav role="navigation">
                    {buttons}
                </nav>

            </div>
        );
    }
}

export default HissPanel;