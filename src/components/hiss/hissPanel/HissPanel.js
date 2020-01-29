import React, { Component } from 'react';
import FloorChanger from '../../../state/FloorChanger';
import './_hissPanel.scss';

class HissPanel extends Component {

    state = {
        arry: this.props.DogData,
        changeFloor: this.changeFloor
    }

    componentDidMount() {
        this.setState({
            arry: this.state.arry.reverse()
        });
    }

    changeFloor = (newFloorNumber, extraClass) => {
        this.props.moveToAnotherFloor(newFloorNumber, extraClass);
    }
    render() {
        let buttons = this.state.arry.map((floor, index) => {
            if (floor.floor <= this.props.openFloors) {
                return (
                    <FloorChanger
                        buttonFloor = {floor.floor}
                        index = {index}
                    />
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
                PANEL
                <h3>Velg etasje{this.props.openFloors}</h3>
                <nav role="navigation">
                    {buttons}
                </nav>

            </div>
        );
    }
}

export default HissPanel;