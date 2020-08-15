import React from 'react';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core';

const questions = [
    "Are you maintaining a healthy schedule to go to bed?",
    "Have you been exercising a lot?",
    "Have you been working towards your goal?",
    "Have you been eating and drinking enough regularly?",
    "Have you been interacting with friends & families?",
];

const styles = {
    root: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center"
    },
    switches: {
        display: "flex",
        alignItems: "center"
    }
}

function YesNoQuestion(props) {
    const {index, checked, toggleAnswer, classes, disabled} = props;
    const handleChange = () => {
        toggleAnswer(index);
    }
    return (
        <div className={classes.root}>
            <p>{questions[index]}</p>
            <div className={classes.switches}>
                <p>No</p>
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    color={index % 2 === 0 ? "primary" : "secondary"}
                    name="checked"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    disabled={disabled}
                />
                <p>Yes</p>
            </div>
        </div>
  );
}

export default withStyles(styles)(YesNoQuestion);