
import React from 'react';
import { Link } from 'react-router-dom';
import './_home.scss';
import FancyLightChain from '../../components/fancyLightChain/FancyLightChain';

export default class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <FancyLightChain
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
                                "blinking": false
                            },
                            {
                                "color": "green",
                                "blinking": true
                            }
                        ]
                    }
                />
                {/* <Header /> */}
                <div className="c_home">
                    <h2>INGEN JUL UTEN KALENDER</h2>
                    <p>Men beklager at det er en ræv idé</p>
                </div>
            </div>
        );
    }
}