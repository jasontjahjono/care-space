import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import JournalFormSlider from './JournalFormSlider';
import JournalFormInput from './JournalFormInput';
import TimePicker from './TimePicker';
import InputItem from './InputItem';
import YesNoQuestion from './YesNoQuestion';

const styles = {
    inputContainer: {
        width: "300px",
        margin: "auto"
    }
}

class JournalNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            mood: 3,
            plus: [],
            minus: [],
            tired: 3,
            meal: new Date(),
            ynquestions: [false, false, false, false, false],
            plan: [
                [],
                [],
                []
            ]
        }
        this.changeMood = this.changeMood.bind(this);
        this.changeTired = this.changeTired.bind(this);
        this.addInput = this.addInput.bind(this);
        this.changeMealTime = this.changeMealTime.bind(this);
        this.toggleAnswer = this.toggleAnswer.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    changeMood(value) {
        this.setState({mood: value});
    }
    changeTired(value) {
        this.setState({tired: value});
    }
    addInput(string, num) {
        if(num === 4) this.setState({plus: [...this.state.plus, string]});
        else if(num === 5) this.setState({minus: [...this.state.minus, string]});
        else {
            const concatPlan = [...this.state.plan[num-1], string];
            let newPlan = "";
            if(num === 1) {
                newPlan = [concatPlan, this.state.plan[1], this.state.plan[2]];
            } else if(num === 2) {
                newPlan = [this.state.plan[0], concatPlan, this.state.plan[2]];
            } else if(num === 3) {
                newPlan = [this.state.plan[0], this.state.plan[1], concatPlan];
            }
            this.setState({plan: newPlan});
        }
    }
    changeMealTime(date) {
        this.setState({meal: date});
    }
    toggleAnswer(index) {
        let newAnswer = [...this.state.ynquestions];
        newAnswer[index] = !this.state.ynquestions[index];
        this.setState({ynquestions: newAnswer}, () => console.log(this.state.ynquestions))
    }
    handleClick() {
        const meal = this.state.meal;
        const date = this.state.date;
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
        const dd = String(date.getDate()).padStart(2, '0');
        const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = date.getFullYear();
        const parsedDate = dd + '/' + mm + '/' + yyyy;
        const newJournal = {
            date: parsedDate,
            mood: this.state.mood,
            plus: this.state.plus,
            minus: this.state.minus,
            tired: this.state.tired,
            meal: time,
            ynquestions: this.state.ynquestions,
            plan: this.state.plan
        }
        this.props.saveJournal(newJournal);
        this.props.history.push('/');
    }
    render() {
        const {plus, minus, plan, meal, ynquestions} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <JournalFormSlider handleChange={this.changeMood} type="moods"/>
                <JournalFormSlider handleChange={this.changeTired} type="tired"/>
                <div className={classes.inputContainer}>
                    <JournalFormInput addData={this.addInput} idNum={4} label="Positive Things Today"/>
                    {plus.map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <div className={classes.inputContainer}>
                    <JournalFormInput addData={this.addInput} idNum={5} label="Negative Things Today"/>
                    {minus.map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <TimePicker meal={meal} changeMealTime={this.changeMealTime}/>
                <div>
                    {ynquestions.map((bool,i) => (
                        <YesNoQuestion index={i} checked={bool} toggleAnswer={this.toggleAnswer}/>
                    ))}
                </div>
                <div className={classes.inputContainer}>
                    <JournalFormInput addData={this.addInput} idNum={1} label="Work Plan"/>
                    {plan[0].map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <div className={classes.inputContainer}>
                    <JournalFormInput addData={this.addInput} idNum={2} label="Physical Health Plan"/>
                    {plan[1].map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <div className={classes.inputContainer}>
                    <JournalFormInput addData={this.addInput} idNum={3} label="Recreation Plan"/>
                    {plan[2].map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                >Save Journal</Button>
            </div>
        )
    }
}
export default withStyles(styles)(JournalNewForm);