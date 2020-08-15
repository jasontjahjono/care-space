import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FAQData from './FAQData';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "750px",
    },
    container: {
        width: '950px',
        margin: "0 auto",
        borderRadius: "50px",
    },
    headingTitle: {
        width: 950,
        height: 150,
        backgroundColor: "white",
        margin: "auto",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
        color: "#000b33"
    },
    footer: {
        width: 950,
        height: 100,
        backgroundColor: "white",
        margin: "auto",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
    },
    title: {
        padding: 50,
        fontSize: "3rem"
    },
    heading: {
        fontSize: theme.typography.pxToRem(17),
        fontWeight: 600,
    },
    answer: {
        textAlign: "left"
    }
}));

export default function FAQ(props) {
    const classes = useStyles();
    const {questions, answers} = FAQData;
    return (
        <div className={classes.root}>
            
            <div className={classes.headingTitle}>
                <h1 className={classes.title}>Frequently Asked Questions</h1>
            </div>
            <div className={classes.container}>
                {questions.map((question,i) => (
                    <Accordion borderRadius={50}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>{question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.answer}>{answers[i]}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
            <div className={classes.footer} />
        </div>
        
    );
}