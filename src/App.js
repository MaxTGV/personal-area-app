import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { ContactsPage } from "./ContactsPage";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { PageNotFound } from "./PageNotFound";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
