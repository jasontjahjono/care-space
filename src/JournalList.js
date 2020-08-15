import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import JournalSnippet from './JournalSnippet';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import ActivityNotification from './ActivityNotification';

const styles = {
    root: {
        backgroundColor: "#fafafa",
        width: "950px",
        margin: "25px auto",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "50px"
    },
    container: {
        width: 900,
        margin: "auto",
        paddingBottom: 40
    },
    heading: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0 20px",
        "& a": {
            textDecoration: "none"
        }
    },
    title: {
        fontSize: "3rem",
        color: "#000b33"
    },
    snippet: {
        margin: 20
    }
}

class JournalList extends Component {
    render() {
        const recentJournals = this.props.journals;
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.heading}>
                        <Link to="/journals/new">
                            <Fab color="secondary">
                                <AddIcon />
                            </Fab>
                        </Link>
                        <h1 className={classes.title}>Your Journals</h1>
                        <ActivityNotification journal={recentJournals[0]}/>
                    </div>
                    {[...new Array(5)].map((value,i) => (
                        <div className={classes.snippet}>
                            <JournalSnippet journal={recentJournals[i]}/>
                        </div>
                    ))}
                    <Link to="/journals/all">
                        <Button variant="contained" color="primary">See All</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(JournalList);