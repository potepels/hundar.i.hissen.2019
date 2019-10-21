
import React from 'react';
import { Link } from 'react-router-dom';
import './_home.scss';
import Header from '../../components/header/Header';
import Hiss from '../../components/hiss/Hiss';
import FancyLightChain from '../../components/fancyLightChain/FancyLightChain';

export default class Home extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="c_home">                    
                    <Hiss />
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
                                "blinking": true
                            },
                            {
                                "color": "green",
                                "blinking": true
                            }
                        ]
                    }
                />
                </div>
            </div>
        );
    }
}