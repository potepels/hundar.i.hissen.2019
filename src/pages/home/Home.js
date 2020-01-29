
import React from 'react';
// import { Link } from 'react-router-dom';
import './_home.scss';
import Header from '../../components/header/Header';
import Hiss from '../../components/hiss/Hiss';
import CurrentFloor from '../../state/CurrentFloor';
import FloorChanger from '../../state/FloorChanger';
// import FancyLightChain from '../../components/fancyLightChain/FancyLightChain';

export default class Home extends React.Component {
    
    changeFloor = floor => {
        this.setState({
            floor
        });
    }

    state = {
        floor: 1,
        changeFloor: this.changeFloor,
        floorClass: "xiapia"
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentFloorClass: 'xiapia'
    //     }        
    //     this.getCurrentFloor = this.getCurrentFloor.bind(this);
    // }

    // getCurrentFloor(newFloorClass) {
    //     this.setState({
    //         currentFloorClass: newFloorClass
    //     })
    // }

    render() {
        return (
            <div className="wrapper">
                <Header />
                {/* <div className={`p_home p_home--${this.state.currentFloorClass}`}> */}
                <div className="p_home">
                    <CurrentFloor.Provider value={this.state}>
                        <h3>FLOOR: {this.state.floor}</h3>
                        <Hiss />
                        <FloorChanger />
                    </CurrentFloor.Provider>
                    <div className="p_home__floor" aria-hidden />
                    {/* <CurrentFloor.Provider value="Hehe"> */}
                        {/* <Hiss
                            getCurrentFloor={this.getCurrentFloor}
                        /> */}
                    {/* </CurrentFloor.Provider> */}
                    
                    {/* <FancyLightChain
                        name='chain-1'
                        direction='horizontal'
                        lights={
                            [
                                {
                                    "color": "blue",
                                    "blinking": false
                                },
                                {
                                    "color": "pink",
                                    "blinking": true
                                },
                                {
                                    "color": "green",
                                    "blinking": false
                                },
                                {
                                    "color": "blue",
                                    "blinking": false
                                },
                                {
                                    "color": "red",
                                    "blinking": true
                                },
                                {
                                    "color": "green",
                                    "blinking": true
                                }
                            ]
                        }
                    /> */}
                </div>
            </div>
        );
    }
}