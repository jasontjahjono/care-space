import React, { Component } from 'react';
import JournalSnippet from './JournalSnippet';

class JournalHistory extends Component {
    render() {
        const {journals} = this.props;
        return (
            <div>
                <h1>Journal Bank</h1>
                {journals.map(data => (
                    <JournalSnippet journal={data}/>
                ))}
            </div>
        )
    }
}

export default JournalHistory;