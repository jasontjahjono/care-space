// Mood Today (1-5)
// 1. Horrible :(
// 2. Bad :/
// 3. Moderate :|
// 4. Good :)
// 5. Excellent :D

//Positive things ["", "",]
//Negative things ["", "",]

//Tiredness Level (1-5)

//Last Time Whole Meal ""
// Yes or No Questions
// 1. Did you sleep well last night?
// 2. 
// 3. 

//Planner -- What goals tomorrow
// -- Work (Creative Aspects)
// -- Physical Health
// -- Recreation (How to Relax)

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/styles';

const styles = {
    diagonaltext: {
        fontFamily: "Rockwell",
        fontSize: "1.6rem",
        "& h1": {
            textAlign: "center"
        },
        "& hr": {
            height: "30px",
            borderStyle: "dotted none none",
            borderWidth: "5px",
            width: "20%"
        }

    }
}
class JournalDetails extends Component {
    static defaultProps = {
        moods: ["😟","😕","😐","🙂","😁"],
        tiredness: ["😴","😩","😶","😌","💪"],
        yesnoqtns: [
            "Did You have a good sleep1?",
            "Did You have a good sleep2?",
            "Did You have a good sleep3?",
            "Did You have a good sleep4?",
            "Did You have a good sleep5?",
        ],
        categories: ["Work", "Physical Health", "Recreation"]
    }
    render() {
        const {date, mood, plus, minus, tired, meal, ynquestions, plan} = this.props.journal;
        const {moods, yesnoqtns, tiredness, categories, open, closeDetails, classes} = this.props;
        let morning, hour;
        let minutes = meal.getMinutes();
        if(meal.getHours() >= 12) {
            morning = false;
            hour = meal.getHours() - 12;
            if(hour < 10) {
                hour = "0" + hour;
            }
        } else if(meal.getHours() === 0) {
            morning = true;
            hour = 12;
        } else if(meal.getHours() < 10){
            morning = true;
            hour = "0" + meal.getHours();
        } else {
            morning = true;
            hour = meal.getHours();
        }
        if(meal.getMinutes() < 10) minutes = "0" + meal.getMinutes();
        const time = hour + ":" + minutes + (morning ? "AM" : "PM");
        return (
            <Dialog
                open={open}
                onClose={closeDetails}
                scroll="paper"
            >
                <DialogTitle>{date} Journal Details</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText className={classes.diagonaltext}>
                        <h1>{date}</h1>
                        <hr></hr>
                        <h2>Mood Today: {moods[mood-1]}</h2>
                        <ul>Good Things:
                            {plus.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                        <ul>Bad Things:
                            {minus.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                        <h4>Tiredness Level: {tiredness[tired-1]}</h4>
                        <h4>Last Time I've had a Whole Meal: {time}</h4>
                        <div>
                            {ynquestions.map((item,i) => (
                                <div>
                                    <h5>{yesnoqtns[i]}</h5>
                                    <p>{item ? "Yes" : "No"}</p>
                                </div>
                            ))}
                        </div>
                        {plan.map((category,i) => (
                            <div>
                                <h5>{categories[i]}</h5>
                                {category.map(item => (
                                    <p>{item}</p>
                                ))}
                            </div>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={closeDetails}>
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(JournalDetails);