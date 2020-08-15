import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';


const styles = {
    root: {
        display: 'inline-block',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '3px',
        marginX: 'auto',
    }
}

class InputItemDeletable extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.deleteItem(this.props.text);
    }
    render() {
        const {classes, color, text, variant} = this.props;
        return (
            <div className={classes.root}>
                <Chip
                    label={text}
                    color={color}
                    onDelete={this.handleDelete}
                    variant={variant}
                    deleteIcon={<DoneIcon />}
                />
            </div>
        )
    }
}

export default withStyles(styles)(InputItemDeletable);