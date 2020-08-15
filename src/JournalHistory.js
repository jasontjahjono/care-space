import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import JournalSnippet from './JournalSnippet';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const styles = {
    root: {
        backgroundColor: "#fafafa",
        width: "970px",
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
        margin: 10
    },
    snippetGroup: {
        display: "flex",
        flexWrap: "wrap",
        margin: "auto"
    }
}

class JournalHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyOpen: false,
        }
    }
    componentDidMount() {
        this.setState({historyOpen: true});
    }
    render() {
        const {journals, classes} = this.props;
        const {historyOpen} = this.state;
        return (
            <Fade in={historyOpen} timeout={1000}>
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
                    <div className={classes.snippetGroup}>
                        {journals.map(data => (
                            <div className={classes.snippet}>
                                <JournalSnippet journal={data}/>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        )
    }
}

export default withStyles(styles)(JournalHistory);