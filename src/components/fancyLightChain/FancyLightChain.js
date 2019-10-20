import React, { Component } from 'react';
import FancyLight from './FancyLight';
import './_fancyLightChain.scss';

class FancyLightChain extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     navOpen: false
        // }
        // this.toggleMainMenu = this.toggleMainMenu.bind(this);
    }

    renderChain() {
        const FancyLightsInChain = this.props.lights.map((item, index) => <FancyLight
            key={index}
            color={item.color}
            blinking={item.blinking}
        />
        )
        return FancyLightsInChain;
    }

    render() {
        return (
            <div className="c_fancy-light-chain">
                {this.renderChain()}
                <span className="c_fancy-light-chain__cord" />
            </div>
        );
    }
}

export default FancyLightChain;