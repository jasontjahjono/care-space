import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import JournalDetails from './JournalDetails';

const styles = {
    root: {
        width: "500px",
        margin: "auto",
        "&:hover div": {
            transition: "transform 0.3s ease",
            transform: "scale(1.1)",
            opacity: "0.8"
        }
    },
    container: {
        border: "1px solid black",
        borderRadius: "30px",
        backgroundColor: "#c6f2f5",
        boxShadow: "2px 2px 7px rgba(0,0,0,0.4)",
        padding: "15px"
    },
    date: {
        margin: 0,
        marginBottom: 5
    },
    mood: {
        margin: 0,
        "& span": {
            fontSize: "2rem"
        }
    }
}

class JournalSnippet extends Component {
    static defaultProps = {
        moods: ["😟","😕","😐","🙂","😁"]
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
        const {journal, moods, classes} = this.props;
        const {mood, date} = this.props.journal;
        const {openDetails} = this.state;
        return (
            <div className={classes.root}>
                <div onClick={this.handleOpen} className={classes.container}>
                    <h3 className={classes.date}>Entry Date: {date}</h3>
                    <h4 className={classes.mood}>
                        Mood: <span>{moods[mood-1]}</span>
                    </h4>
                </div>
                <JournalDetails journal={journal} open={openDetails} closeDetails={this.handleClose}/>
            </div>
        )
    }
}

export default withStyles(styles)(JournalSnippet);