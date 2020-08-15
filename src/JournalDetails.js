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
import JournalDetailsSlider from './JournalDetailsSlider';
import InputItem from './InputItem';
import YesNoQuestion from './YesNoQuestion';

const styles = {
    dialogBox: {
        borderRadius: "50px",
    },
    dialogNonContent: {
        backgroundColor: "#fafafa",
    }
}
class JournalDetails extends Component {
    static defaultProps = {
        categories: ["Work Plan", "Physical Health Plan", "Recreation Plan"]
    }
    render() {
        const {date, mood, plus, minus, tired, meal, ynquestions, plan} = this.props.journal;
        const {categories, open, closeDetails, classes} = this.props;
        return (
            <Dialog
                open={open}
                onClose={closeDetails}
                scroll="paper"
                className={classes.dialogBox}
            >
                <DialogTitle className={classes.dialogNonContent}>Entry {date}</DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText>
                        <h3>Mood:</h3>
                        <JournalDetailsSlider type="moods" value={mood}/>
                        <h3>Positive Things:</h3>
                        {plus.map(item => (
                            <InputItem text={item} color="primary" variant="default"/>
                        ))}
                        <h3>Negative Things:</h3>
                        {minus.map(item => (
                            <InputItem text={item} color="secondary" variant="default"/>
                        ))}
                        <h3>Energy Level:</h3>
                        <JournalDetailsSlider type="tired" value={tired}/>
                        <h3>Last Time I've had a Whole Meal: <span>{meal}</span></h3>
                        <h3>Daily Self-Care Questions: </h3>
                        <div>
                            {ynquestions.map((item,i) => (
                                <YesNoQuestion index={i} checked={item} disabled={true}/>
                            ))}
                        </div>
                        <h3>Tomorrow's Goals</h3>
                        {plan.map((category,i) => (
                            <div>
                                <h4>{categories[i]}</h4>
                                {category.map(item => (
                                    <InputItem text={item} color="primary" variant="outlined"/>
                                ))}
                            </div>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialogNonContent}>
                    <Button color="primary" onClick={closeDetails}>
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(JournalDetails);