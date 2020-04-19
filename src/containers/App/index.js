import React  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Faq from 'routes/Faq';

function App() {
  return (
    <Switch>
      <Route path="/faq" component={Faq} />
      <Redirect to="/faq" />
    </Switch>
  );
}

export default App;
