import React, { Component } from 'react'
import './_hiss.scss';
import Dog from '../../components/dog/Dog';
import HissPanel from './hissPanel/HissPanel';
import FloorDisplay from './floorDisplay/FloorDisplay';
import DogData from '../../data/dogs.json'; 

class Hiss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false,
            status: 'closed',
            hissenDogs: [],
            doorsOpen: true,
            displayDay: 1
        }
        this.todaysDate = new Date();
        this.todaysDayNumber = this.todaysDate.getDate();
    }

    componentDidMount() {
        this.setHissStatus();
    }

    getDogs() {
        const openDogs = DogData.slice(0, this.todaysDayNumber);
        this.setState({ hissenDogs: openDogs });
        return this.state.hissenDogs;
    }

    setHissStatus() {
        const startDate = new Date(2019, 9, 1);
        const endDate = new Date(2019, 9, 24);
        console.log(endDate);
        if (this.todaysDate < startDate) {
            this.setState({ status: 'early' });
        } 
        // else if (this.todaysDate > endDate) {
        //     this.setState({ status: 'closed' });
        // }
         else {
            this.setState({ status: 'open' });
            this.getDogs(this.todaysDate);
        }
        return this.state.status;
    }

    render() {
        let visibleDogs = this.state.hissenDogs.map((dog, index) => {
            return <Dog
                key={`dog-${index}`}
                floor={dog.floor}
                image={dog.image}
                name={dog.name}
                class={dog.class}
            />
        })

        return (
            <div className="c_hiss">
                <div className="c_hiss__doors c_hiss__doors--closed shake">
                    <div className="c_hiss__doors__door c_hiss__doors__door--left">
                        <span className="c_grafitti c_grafitti--1">2 cool 4 school</span>
                        <span className="c_grafitti c_grafitti--2">merry<br /> x-mas</span>
                    </div>
                    <div className="c_hiss__doors__door c_hiss__doors__door--right">
                        <span className="c_grafitti c_grafitti--3">I'm pawsome</span>
                    </div>
                </div>
               
                <FloorDisplay
                    displayDay={this.state.displayDay} 
                />
                <HissPanel 
                    floorsInTotal={DogData.length}
                    openFloors={this.todaysDayNumber}
                    DogData={DogData}
                /> 
                <div className="c_hiss__room">
                LOL {this.state.status}
                    {this.state.status === 'open' && (
                        visibleDogs
                    )}
                </div>
            </div>
        );
    }
}

export default Hiss;