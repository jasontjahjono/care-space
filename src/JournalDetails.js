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
    diagonal: {
        backgroundColor: "#5AA7A7"
    },
    diagonalcontent: {
        backgroundColor: "#96D7C6"
    },
    diagonaltext: {
        fontFamily: "Rockwell",
        fontSize: "1.6rem",
        "& h1": {
            textAlign: "center"
        },
        "& hr":{
            border: "0",
            margin: "1.35rem auto",
            maxWidth: "100%",
            backgroundPosition: "50%",
            boxSizing: "border box"
        }
    },
    divider: {
        height: "20px",
        width: "60%",
        backgroundImage: "radial-gradient(farthest-side at 50% -50%, hsla(0, 0%, 0%, 0.5), hsla(0, 0%, 0%, 0))",
        position: "relative",
        "&: before": {
            height: "1px",
            position: "absolute",
            top: "-1px",
            left: "0",
            right: "0",
            backgroundImage: "linear-gradient(90deg, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.75) 50%, hsla(0, 0%, 0%, 0))"
                    }

    }
}
class JournalDetails extends Component {
    static defaultProps = {
        moods: ["😟","😕","😐","🙂","😁"],
        tiredness: ["😴","😩","😶","😌","💪"],
        yesnoqtns: [
            "Are you maintaining a healthy schedule to go to bed?",
            "Have you been exercising a lot?",
            "Have you been working towards your goal?",
            "Have you been eating and drinking enough regularly?",
            "Have you been keeping in touch with your friends and families?",
        ],
        categories: ["Work", "Physical Health", "Recreation"]
    }
    render() {
        const {date, mood, plus, minus, tired, meal, ynquestions, plan} = this.props.journal;
        const {moods, yesnoqtns, tiredness, categories, open, closeDetails, classes} = this.props;
        // let morning, hour;
        // let minutes = meal.getMinutes();
        // if(meal.getHours() >= 12) {
        //     morning = false;
        //     hour = meal.getHours() - 12;
        //     if(hour < 10) {
        //         hour = "0" + hour;
        //     }
        // } else if(meal.getHours() === 0) {
        //     morning = true;
        //     hour = 12;
        // } else if(meal.getHours() < 10){
        //     morning = true;
        //     hour = "0" + meal.getHours();
        // } else {
        //     morning = true;
        //     hour = meal.getHours();
        // }
        // if(meal.getMinutes() < 10) minutes = "0" + meal.getMinutes();
        // const time = hour + ":" + minutes + (morning ? "AM" : "PM");
        return (
            <Dialog
                open={open}
                onClose={closeDetails}
                scroll="paper"
            >
                <DialogTitle className={classes.diagonal}>{date} Journal Details</DialogTitle>
                <DialogContent className={classes.diagonalcontent} dividers={true}>
                    <DialogContentText className={classes.diagonaltext}>
                        <h1>{date}</h1>
                        <hr className={classes.divider}></hr>
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
                        <h4>Last Time I've had a Whole Meal: {meal}</h4>
                        <div>
                            {ynquestions.map((item,i) => (
                                <div>
                                    <h5>{yesnoqtns[i]}</h5>
                                    <p>{item ? "Yes" : "No"}</p>
                                </div>
                            ))}
                        </div>
                        <h4>Tomorrow's Goals</h4>
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
                <DialogActions className={classes.diagonal}>
                    <Button color="primary" onClick={closeDetails}>
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(JournalDetails);