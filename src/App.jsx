import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './pages/home/Home';
import { Time } from './pages/time/Time';
import { Weather } from './pages/weather/Weather';
import { NotFound } from './pages/NotFound/NotFound';

import './app.css';

export const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/time" component={Time} />
          <Route path="/weather" component={Weather} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};
