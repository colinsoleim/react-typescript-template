import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './modules/auth/userContext';
import LoginPage from './modules/auth/pages/LoginPage';

const App: React.FC = () => {
  const { user } = useContext(UserContext);

  const ProtectedRoute = ({ component: Component, path }) => (
    <Route
      exact
      path={path}
      render={(props) => (user.id ? <Component props={props} component /> : <Redirect to="/login" />)}
    />
  );

  const AuthRoute = ({ component: Component, path }) => (
    <Route
      path={path}
      render={(props) => (user.id === undefined ? <Component props={props} component /> : <Redirect to="/" />)}
    />
  );

  return user ? (
    <Router forceRefresh>
      <Switch>
        <ProtectedRoute path="/secrets" component={() => null} />
        <AuthRoute path="/login" component={() => <LoginPage />} />
        <ProtectedRoute path="/" component={() => null} />
      </Switch>
    </Router>
  ) : (
    <div />
  );
};

export default App;
