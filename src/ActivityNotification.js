import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import Badge from '@material-ui/core/Badge';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputItemDeletable from './InputItemDeletable';

const styles = {
    dialog: {
        width: 400,
        margin: "auto",
    }
}

class ActivityNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workPlan: [...this.props.journal.plan[0]],
            healthPlan: [...this.props.journal.plan[1]],
            relaxPlan: [...this.props.journal.plan[2]],
            open: false
        }
        this.closeActivity = this.closeActivity.bind(this);
        this.openActivity = this.openActivity.bind(this);
        this.deleteWorkPlan = this.deleteWorkPlan.bind(this);
        this.deleteHealthPlan = this.deleteHealthPlan.bind(this);
        this.deleteRelaxPlan = this.deleteRelaxPlan.bind(this);
    }
    closeActivity() {
        this.setState({open: false});
    }
    openActivity() {
        this.setState({open: true});
    }
    deleteWorkPlan(string) {
        this.setState(st => ({workPlan: st.workPlan.filter(item => item !== string)}));
    }
    deleteHealthPlan(string) {
        this.setState(st => ({healthPlan: st.healthPlan.filter(item => item !== string)}));
    }
    deleteRelaxPlan(string) {
        this.setState(st => ({relaxPlan: st.relaxPlan.filter(item => item !== string)}));
    }
    render() {
        const {workPlan, healthPlan, relaxPlan, open} = this.state;
        const notifNum = workPlan.length + healthPlan.length + relaxPlan.length;
        const {classes} = this.props;
        return (
            <div>
                <Badge badgeContent={notifNum} color="secondary" overlap="circle">
                    <NotificationsActiveRoundedIcon
                        fontSize="large"
                        color="action"
                        onClick={this.openActivity}
                    />
                </Badge>
                <Dialog 
                    fullWidth 
                    open={open} 
                    className={classes.dialog}
                    onClose={this.closeActivity}
                >
                    <DialogTitle>Today's Goals</DialogTitle>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Work Plan</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                {workPlan.map(item => (
                                    <InputItemDeletable
                                        text={item}
                                        color="primary"
                                        variant="default"
                                        deleteItem={this.deleteWorkPlan}
                                    />
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Physical Health Plan</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                {healthPlan.map(item => (
                                    <InputItemDeletable
                                        text={item}
                                        color="secondary"
                                        variant="default"
                                        deleteItem={this.deleteHealthPlan}
                                    />
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Recreation Plan</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                {relaxPlan.map(item => (
                                    <InputItemDeletable
                                    text={item}
                                    color="primary"
                                    variant="default"
                                    deleteItem={this.deleteRelaxPlan}
                                />
                                ))}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <DialogActions>
                        <Button color="primary" onClick={this.closeActivity}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(ActivityNotification);