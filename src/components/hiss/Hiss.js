import React, { Component } from 'react'
// import Moment from 'react-moment';
// import * as moment from 'moment';
// var moment = require('moment');
import './_hiss.scss';
import Dog from '../../components/dog/Dog';
import HissPanel from '../../components/hissPanel/HissPanel';
import DogData from '../../data/dogs.json';

class Hiss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false,
            status: 'closed',
            hissenDogs: []
        }
        this.todaysDate = new Date();
        this.todaysDayNumber = this.todaysDate.getDate();
    }

    componentDidMount() {
        this.setHissStatus();
    }

    getDogs(todaysDate) {
        const openDogs = DogData.slice(0, this.todaysDayNumber);
        this.setState({ hissenDogs: openDogs });
        return this.state.hissenDogs;
    }

    setHissStatus() {
        const startDate = new Date(2019, 9, 1);
        const endDate = new Date(2019, 9, 23);

        if (this.todaysDate < startDate) {
            this.setState({ status: 'early' });
        } else if (this.todaysDate > endDate) {
            this.setState({ status: 'closed' });
        } else {
            this.setState({ status: 'open' });
            this.getDogs(this.todaysDate);
        }
        return this.state.status;
    }

    render() {
        let visibleDogs = this.state.hissenDogs.map((dog, index) => {
            return <Dog
                key={index}
                floor={dog.floor}
                image={dog.image}
                name={dog.name}
                class={dog.class}
            />
        })

        return (
            <div className="c_hiss">
                <HissPanel
                    floorsInTotal={DogData.length}
                    openFloors={this.todaysDayNumber}
                    DogData={DogData}
                />
                {this.state.status === 'open' && (
                    visibleDogs
                )}
            </div>
        );
    }
}

export default Hiss;