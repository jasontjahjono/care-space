import React from 'react';
import JournalList from './JournalList';
import JournalHistory from './JournalHistory';
import JournalNewForm from './JournalNewForm';
import seedData from './seedData';
import {Switch, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() =>
          <JournalList journals={seedData} />
        }/>
        <Route exact path="/journals/all" render={() =>
          <JournalHistory journals={seedData} />
        }/>
        <Route exact path="/journals/new" render={() =>
          <JournalNewForm />
        }/>
      </Switch>
    </div>
  );
}

export default App;
