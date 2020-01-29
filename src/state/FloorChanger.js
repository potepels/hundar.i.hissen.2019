import React, { Component } from 'react';

// import FloorPanelButton from '../components/hiss/hissPanel/HissPanelButton';
import CurrentFloor from './CurrentFloor';

class FloorChanger extends Component {
  render() {
    return (
      <CurrentFloor.Consumer>
        {({ floor, changeFloor }) => (
          <button 
            onClick={() => changeFloor(this.props.buttonFloor)} className="c_hiss-panel__button c_panel__button--active"
            key={`hissPanelButton-${this.props.index}`}
            >
            <span>{this.props.buttonFloor}</span>
          </button>
        )}

      </CurrentFloor.Consumer>
    )
  }
}

export default FloorChanger;