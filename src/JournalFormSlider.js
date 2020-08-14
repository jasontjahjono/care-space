import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const styles = {
    slider: {
        width: 200,
        margin: "auto",
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

class JournalFormSlider extends Component {
    constructor(props) {
        super(props);
        this.valueLabelFormat = this.valueLabelFormat.bind(this);
        // this.valueLabelTired = this.valueLabelTired.bind(this);
        this.valuetext = this.valuetext.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt, value) {
        this.props.handleChange((value/25)+1);
    }
    valuetext(value) {
        return value;
    }
    valueLabelFormat(value) {
        return this.props.type === "moods"
            ? moods[moods.findIndex((item) => item.value === value)].label
            : tired[tired.findIndex((item) => item.value === value)].label
    }
    render() {
        const {classes, type} = this.props;
        return (
            <div className={classes.slider}>
                <Typography gutterBottom>
                    {type === "moods" ? "How is Your Mood Today?" : "How Tired are You Today?"}
                </Typography>
                <div>
                    <Slider 
                        onChange={this.handleChange}
                        defaultValue={50}
                        valueLabelFormat={this.valueLabelFormat}
                        getAriaValueText={this.valuetext}
                        valueLabelDisplay="auto"
                        step={null}
                        marks={type === "moods" ? moods : tired}
                    />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(JournalFormSlider);