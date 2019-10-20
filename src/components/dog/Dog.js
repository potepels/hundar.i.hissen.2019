import React, { Component } from 'react';
import './_dog.scss';

class Dog extends Component {
    render() {

        return (
            <div className="c_dog">
                <h2>Hei, eg er {this.props.name}</h2>
            </div>
        );
    }
}

export default Dog;