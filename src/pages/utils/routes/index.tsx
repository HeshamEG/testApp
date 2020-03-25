import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../../home';
import Posts from '../../posts';
function Routes() {
	return (
		<Router>
          <Switch>
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/" component={Home} />
            <Route exact path="/todos" component={Home} />

          </Switch>
      </Router>
	);
}

export default Routes;
