import React, {Component} from 'react';

import RadioList from '../../components/RadioList/RadioList';
import Layout from '../../components/Layout/Layout';
import './RadioBuilder.css';

const RADIO_STATIONS = [
    {name: 'Putin FM', frequency: "66,6"},
    {name: 'Dribble FM', frequency: "101,2"},
    {name: 'Doge FM', frequency: "99,4"},
    {name: 'Ballads FM', frequency: "87,1"},
    {name: 'Maximum FM', frequency: "142,2"},
];

class RadioBuilder extends Component {
    state = {
        nowPlaying: ""
    };

    changeStation = (station) => {
        this.setState({nowPlaying: station})
    };

    render () {
        return (
            <div className={"widget"}>
                <Layout nowPlaying={this.state.nowPlaying}>
                    <RadioList nowPlaying={this.state.nowPlaying}
                               stations={RADIO_STATIONS}
                               changeStation={this.changeStation}/>
                </Layout>
            </div>
        )
    }
}

export default RadioBuilder;