import React, { Component } from 'react'
import './_hiss.scss';
import Dog from '../../components/dog/Dog';

class Hiss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false
        }

        // this.toggleMainMenu = this.toggleMainMenu.bind(this);
    }

    // toggleMainMenu() {
    //     window.scrollTo(0, 0);
    //     this.setState({
    //         navOpen: !this.state.navOpen
    //     });
    // }

    render() {
        return (
            <div className="c_hiss">
                <Dog />
            </div>
        );
    }
}

export default Hiss;