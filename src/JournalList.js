import React, { Component } from 'react';
import JournalSnippet from './JournalSnippet';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class JournalList extends Component {
    render() {
        const recentJournals = this.props.journals.reverse();
        return (
            <div>
                <h1>Journal List</h1>
                <Link to="/journals/all">
                    <Button variant="contained" color="primary">See All</Button>
                </Link>
                {[...new Array(5)].map((value,i) => (
                    <JournalSnippet journal={recentJournals[i]}/>
                ))}
            </div>
        )
    }
}

export default JournalList;