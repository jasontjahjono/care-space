import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class JournalFormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }
    handleChange(e) {
        this.setState({inputValue: e.target.value});
    }
    keyPress(e) {
        if(e.keyCode === 13) {
            this.props.addData(this.state.inputValue, this.props.idNum);
            this.setState({inputValue: ""});
        };
        
    }
    render() {
        const {inputValue} = this.state;
        const {label} = this.props
        return (
            <div>
                <TextField
                    label={label}
                    variant="outlined"
                    onChange={this.handleChange}
                    value={inputValue}
                    onKeyDown={this.keyPress}
                />
            </div>
        )
    }
 }
 export default JournalFormInput;
