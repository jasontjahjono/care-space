import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import JournalList from './JournalList';
import ProgressGraph from './ProgressGraph';
import Typist from 'react-typist';
import FAQ from './FAQ';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import "./transitionStyles.css";
import Fade from '@material-ui/core/Fade';

const styles = {
    root: {
        padding: "50px"
    },
    titleGroup: {
        width: "670px",
        margin: "auto",
        color: "#000b33"
    },
    greeting: {
        fontWeight: "300",
        margin: 0,
        fontSize: "1.5rem",
        textAlign: "left"
    },
    title: {
        fontSize: "8rem",
        textWrap: "wrap",
        margin: 0,
        lineHeight: "140px"
    }
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moodOpen: false,
            energyOpen: false,
            journalOpen: false,
            faqOpen: false
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({moodOpen: true}), 4700);
        setTimeout(() => this.setState({energyOpen: true}), 5500);
        setTimeout(() => this.setState({journalOpen: true}), 6300);
        setTimeout(() => this.setState({faqOpen: true}), 7100);
    }
    render() {
        const {classes, journals} = this.props;
        const {moodOpen, energyOpen, journalOpen, faqOpen} = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.titleGroup}>
                    <Typist avgTypingDelay={100} cursor={{show: false}}>
                        <h3 className={classes.greeting}>Welcome to</h3>
                        <h1 className={classes.title}>CareSpace</h1>
                    </Typist>
                    <Typist avgTypingDelay={40} cursor={{show: false}}>
                        <Typist.Delay ms={2500} /> 
                        <p>Guiding you back on track to your healthy habits</p>
                    </Typist>
                </div>
                <Fade in={moodOpen} timeout={1000}>
                    <div>
                        <ProgressGraph journals={journals} type="mood" changeBoard={this.changeBoard}/>
                    </div>
                </Fade>
                <Fade in={energyOpen} timeout={1000}>
                    <div>
                        <ProgressGraph journals={journals} type="tired" changeBoard={this.changeBoard}/>
                    </div>
                </Fade>
                <Fade in={journalOpen} timeout={1000}>
                    <div>
                        <JournalList journals={journals}/>
                    </div>
                </Fade>
                <Fade in={faqOpen} timeout={1000}>
                    <div>
                        <FAQ />
                    </div>
                </Fade>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);