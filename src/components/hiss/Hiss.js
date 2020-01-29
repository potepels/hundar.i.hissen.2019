import React, { Component } from 'react'
import './_hiss.scss';
import Dog from '../../components/dog/Dog';
import HissPanel from './hissPanel/HissPanel';
import FloorDisplay from './floorDisplay/FloorDisplay';
import DogData from '../../data/dogs.json';
import CurrentFloor from '../../state/CurrentFloor';
// import { ReactComponent as Inside } from '../../assets/images/site/hiss.inside.svg';

class Hiss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false,
            status: 'closed',
            hissenDogs: [],
            doorsOpen: true,
            displayDay: 1,
            currentFloor: 1
        }
        this.todaysDate = new Date();
        this.todaysDayNumber = this.todaysDate.getDate();
        this.toggleHissDoors = this.toggleHissDoors.bind(this);
        this.moveToAnotherFloor = this.moveToAnotherFloor.bind(this);
    }

    componentDidMount() {
        this.setHissStatus();
    }

    // Sendes til HissPanel for å bytte etasje på panelet
    moveToAnotherFloor(newFloor, hepp) {
        this.setState({
            currentFloor: newFloor
        })
        console.log(this.state.currentFloor);
        // this.props.getCurrentFloor(hepp);
    }

    // Åpner/lukker dørene
    toggleHissDoors() {
        this.setState({
            doorsOpen: !this.state.doorsOpen
        });
    }

    // Hender riktig antall hunder for dagen
    getDogs() {
        const openDogs = DogData.reverse().slice(0, this.todaysDayNumber);
        // openDogs.reverse();
        this.setState({ hissenDogs: openDogs });
        return this.state.hissenDogs;
    }

    setHissStatus() {
        const startDate = new Date(2019, 10, 1);
        const endDate = new Date(2019, 10, 24);
        console.log(endDate);
        if (this.todaysDate < startDate) {
            this.setState({ status: 'early' });
        }
        // else if (this.todaysDate > endDate) {
        //     this.setState({ status: 'closed' });
        // }
        else {
            this.setState({ status: 'open', floorNow: this.todaysDayNumber });
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
                extraClass={dog.extraClass}
            />
        })

        return (
            
            <div className="c_hiss">
                {/* <CurrentFloor.Consumer>
                    {value => (
                        <h3>{value}</h3>
                    )}
                </CurrentFloor.Consumer> */}
                <button onClick={this.toggleHissDoors}>Dører</button>

                <FloorDisplay
                    todaysDayNumber={this.todaysDayNumber}
                    currentFloor={this.state.currentFloor}
                />
                {this.state.status === 'open' && (
                    <HissPanel
                        floorsInTotal={DogData.length}
                        openFloors={this.todaysDayNumber}
                        DogData={DogData}
                        moveToAnotherFloor = {this.moveToAnotherFloor}
                    />
                )}              
                <div className="c_hiss__room">
                    <div className="c_hiss__room__outside c_hiss__room__outside--top" />
                    <div className="c_hiss__room__outside c_hiss__room__outside--left" />
                    <div className="c_hiss__room__outside c_hiss__room__outside--right" />
                    <div className="c_hiss__room__inside c_hiss__room__inside--roof" />
                    <div className="c_hiss__room__inside c_hiss__room__inside--left-wall" />
                    <div className="c_hiss__room__inside c_hiss__room__inside--right-wall" />
                    <div className="c_hiss__room__inside c_hiss__room__inside--floor" />

                    <div className={`c_hiss__doors ${this.state.doorsOpen ? 'c_hiss__doors--closed' : ''}`} aria-hidden>
                        <div className="c_hiss__doors__door c_hiss__doors__door--left">
                            <span className="c_grafitti c_grafitti--1">2 cool 4 school</span>
                            <span className="c_grafitti c_grafitti--2">merry<br /> x-mas</span>
                        </div>
                        <div className="c_hiss__doors__door c_hiss__doors__door--right">
                            <span className="c_grafitti c_grafitti--3">I'm pawsome</span>
                        </div>
                    </div>
                    {this.state.status === 'open' && (
                        <div className="c_hiss__dog-scene">
                            {visibleDogs}
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default Hiss;