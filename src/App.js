import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router';
import Dashboard from './Dashboard';
import JournalHistory from './JournalHistory';
import JournalNewForm from './JournalNewForm';
import seedData from './seedData';
import './App.css'

class App extends PureComponent {
  constructor(props) {
    super(props);
    const savedJournals = JSON.parse(window.localStorage.getItem("journals"));
    this.state = {
      journals: savedJournals || seedData,
      loadIntro: true,
    };
    this.saveJournal = this.saveJournal.bind(this);
  }
  saveJournal(newJournal) {
    this.setState({journals: [newJournal, ...this.state.journals]}, this.syncLocalStorage);
  }
  componentDidMount() {
    setTimeout(() => this.setState({loadIntro: false}), 5000);
  }
  syncLocalStorage() {
    window.localStorage.setItem("journals", JSON.stringify(this.state.journals));
  }
  render() {
    const {journals, loadIntro} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() =>
            <Dashboard journals={journals} loadIntro={loadIntro}/>
          }/>
          <Route exact path="/journals/all" render={() =>
            <JournalHistory journals={journals} />
          }/>
          <Route exact path="/journals/new" render={(routeProps) =>
            <JournalNewForm saveJournal={this.saveJournal} {...routeProps}/>
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
