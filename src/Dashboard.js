import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import JournalList from './JournalList';
import ProgressGraph from './ProgressGraph';
import Typist from 'react-typist';
import FAQ from './FAQ';
import Grow from '@material-ui/core/Grow';

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
        if(this.props.loadIntro) {
            setTimeout(() => this.setState({moodOpen: true}), 4700);
            setTimeout(() => this.setState({energyOpen: true}), 5500);
            setTimeout(() => this.setState({journalOpen: true}), 6300);
            setTimeout(() => this.setState({faqOpen: true}), 7100);
        } else {
            this.setState({moodOpen: true, energyOpen: true, journalOpen: true, faqOpen: true});
        }   
    }
    render() {
        const {classes, journals, loadIntro} = this.props;
        const {moodOpen, energyOpen, journalOpen, faqOpen} = this.state;
        return (
            <div className={classes.root}>
                {loadIntro ? (
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
                ) : (
                    <div className={classes.titleGroup}>
                        <h3 className={classes.greeting}>Welcome to</h3>
                        <h1 className={classes.title}>CareSpace</h1>
                        <p>Guiding you back on track to your healthy habits</p>
                    </div>
                )}
                <Grow in={moodOpen} timeout={1000}>
                    <div>
                        <ProgressGraph journals={journals} type="mood" changeBoard={this.changeBoard}/>
                    </div>
                </Grow>
                <Grow in={energyOpen} timeout={1000}>
                    <div>
                        <ProgressGraph journals={journals} type="tired" changeBoard={this.changeBoard}/>
                    </div>
                </Grow>
                <Grow in={journalOpen} timeout={1000}>
                    <div>
                        <JournalList journals={journals}/>
                    </div>
                </Grow>
                <Grow in={faqOpen} timeout={1000}>
                    <div>
                        <FAQ />
                    </div>
                </Grow>
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);