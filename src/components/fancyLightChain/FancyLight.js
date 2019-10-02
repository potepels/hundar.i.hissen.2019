import React, { Component } from 'react';

class FancyLight extends Component {
    render() {

        const renderClassNames = (props) => {
            let cN = `c_fancy-light c_fancy-light--${props.color ? props.color : 'red'}`;
            if (props.blinking) {
                cN = `${cN} c_fancy-light--blinking`;
            }
            return cN;
        };
        return (
            <span className={renderClassNames(this.props)}>
            </span>
        );
    }
}

export default FancyLight;