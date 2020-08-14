import React, { Component } from 'react';
import JournalDetails from './JournalDetails';

class JournalSnippet extends Component {
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
    constructor(props) {
        super(props);
        this.state = {
            openDetails: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleOpen() {
        this.setState({openDetails: true});
    }
    handleClose() {
        this.setState({openDetails: false});
    }
    render() {
        const {journal, moods} = this.props;
        const {mood, date} = this.props.journal;
        const {openDetails} = this.state;
        return (
            <div>
                <div onClick={this.handleOpen} style={{backgroundColor: "lightblue", border:"4px solid black"}}>
                    <h3>{date}</h3>
                    <h4>mood: {moods[mood-1]}</h4>
                </div>
                <JournalDetails journal={journal} open={openDetails} closeDetails={this.handleClose}/>
            </div>
        )
    }
}

export default JournalSnippet;