import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const styles = {
    root: {
        display: 'inline-block',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '3px',
        overflowX: 'auto',
    }
}

class InputItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        console.info("You Clicked the Delete Icon");
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Chip
                    label={this.props.text}
                    onDelete={this.handleDelete}
                    color="primary"
                />
            </div>
        )
    }
}

export default withStyles(styles)(InputItem);