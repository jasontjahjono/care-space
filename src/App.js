import React, {Component} from 'react';
import JournalList from './JournalList';
import JournalHistory from './JournalHistory';
import JournalNewForm from './JournalNewForm';
import seedData from './seedData';
import FAQ from './FAQ';
import {Switch, Route} from 'react-router-dom';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    const savedJournals = JSON.parse(window.localStorage.getItem("journals"));
    this.state = {
      journals: savedJournals || seedData
    };
    this.saveJournal = this.saveJournal.bind(this);
  }
  saveJournal(newJournal) {
    this.setState({journals: [...this.state.journals, newJournal]}, this.syncLocalStorage);
  }
  syncLocalStorage() {
    window.localStorage.setItem("journals", JSON.stringify(this.state.journals));
  }
  render() {
    const {journals} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() =>
            <JournalList journals={journals} />
          }/>
          <Route exact path="/journals/all" render={() =>
            <JournalHistory journals={journals} />
          }/>
          <Route exact path="/journals/new" render={(routeProps) =>
            <JournalNewForm saveJournal={this.saveJournal} {...routeProps}/>
          }/>
          <Route exact path="/faq" render={() =>
            <FAQ />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
