import React from 'react';
import Switch from '@material-ui/core/Switch';

const questions = [
    "Are you maintaining a healthy schedule to go to bed?",
    "Have you been exercising a lot?",
    "Have you been working towards your goal?",
    "Have you been eating and drinking enough regularly?",
    "Have you been keeping in touch with your friends and families?",
];

export default function Switches(props) {
    const {index, checked, toggleAnswer} = props;
    const handleChange = () => {
        toggleAnswer(index);
    }
    return (
        <div>
            <p>{questions[index]}</p>
            <Switch
                checked={checked}
                onChange={handleChange}
                color={index % 2 === 0 ? "primary" : "secondary"}
                name="checked"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
  );
}