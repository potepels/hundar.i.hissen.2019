import React, { Component } from 'react';
import './_dog.scss';

class Dog extends Component {

    constructor(props) {
        super(props);
        this.dogImages = require.context('../../assets/images/dogs', true);
    }


    render() {
        let dogImage = this.dogImages(`./${this.props.image}`);

        return (
            <div className={`c_dog c_dog--${this.props.extraClass}`}>
                <img src={dogImage} alt="Bilde av hund" />
            </div>
        );
    }
}

export default Dog; 