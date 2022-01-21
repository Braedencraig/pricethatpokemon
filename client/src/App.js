import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Auth/Register';
import { Provider } from 'react-redux';
import store from './redux/store';
import Leaderboard from './Components/Leaderboard/Leaderboard';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
