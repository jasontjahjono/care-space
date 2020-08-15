import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import JournalSnippet from './JournalSnippet';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        backgroundColor: "#fafafa",
        width: "770px",
        margin: "auto",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        borderRadius: "50px",
        padding: "30px"
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
    backBtn: {
        opacity: 0,
        cursor: "default"
    },
    snippet: {
        margin: 20
    }
}

class JournalHistory extends Component {
    render() {
        const {journals, classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.heading}>
                    <Link to="/">
                        <Button variant="contained" color="primary">
                            Back
                        </Button>
                    </Link>
                    <h1 className={classes.title}>Journal Bank</h1>
                    <Button variant="contained" color="primary" className={classes.backBtn}>
                        Back
                    </Button>
                </div>
                {journals.map(data => (
                    <div className={classes.snippet}>
                        <JournalSnippet journal={data}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default withStyles(styles)(JournalHistory);