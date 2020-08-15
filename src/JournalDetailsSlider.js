import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const styles = {
    slider: {
        width: 250,
        margin: "20px auto",
        "& div": {
            transform: "scale(1.5)"
        }
    },
}

const moods = [
    {value: 0, label: "😟"},
    {value: 25, label: "😕"},
    {value: 50, label: "😐"},
    {value: 75, label: "🙂"},
    {value: 100, label: "😁"},
]
const tired = [
    {value: 0, label: "😴"},
    {value: 25, label: "😩"},
    {value: 50, label: "😶"},
    {value: 75, label: "😌"},
    {value: 100, label: "💪"},
]

class JournalDetailsSlider extends Component {
    render() {
        const {classes, type, value} = this.props;
        return (
            <div className={classes.slider}>
                <div>
                    <Slider 
                        defaultValue={(value-1)*25}
                        step={null}
                        marks={type === "moods" ? moods : tired}
                        disabled
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(JournalDetailsSlider);