import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import JournalFormSlider from './JournalFormSlider';
import JournalFormInput from './JournalFormInput';
import TimePicker from './TimePicker';
import InputItem from './InputItem';

const styles = {
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
}

class JournalNewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: 3,
            plus: ["i got a girlfriend","i did my chores", "asdsafda"],
            minus: [],
            tired: 3,
            meal: new Date(),
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
    render() {
        const {plus, minus, plan, meal} = this.state;
        const {classes} = this.props;
        return (
            <div>
                <JournalFormSlider handleChange={this.changeMood} type="moods"/>
                <JournalFormSlider handleChange={this.changeTired} type="tired"/>
                <div className={classes.inputGroup}>
                    <JournalFormInput addData={this.addInput} idNum={4} label="Positive Things Today"/>
                    {plus.map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <div>
                    <JournalFormInput addData={this.addInput} idNum={5} label="Negative Things Today"/>
                    {minus.map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <TimePicker meal={meal} changeMealTime={this.changeMealTime}/>
                <div>
                    <JournalFormInput addData={this.addInput} idNum={1} label="Work Plan"/>
                    {plan[0].map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <div>
                    <JournalFormInput addData={this.addInput} idNum={2} label="Physical Health Plan"/>
                    {plan[1].map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
                <div>
                    <JournalFormInput addData={this.addInput} idNum={3} label="Recreation Plan"/>
                    {plan[2].map(item => (
                        <InputItem text={item}/>
                    ))}
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(JournalNewForm);