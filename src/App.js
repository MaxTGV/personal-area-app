import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { ContactsPage } from "./ContactsPage";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { PageNotFound } from "./PageNotFound";

const AppContainer = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background: #f9f9fb;
`;

export const App = () => {
  return (
    <AppContainer>
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
    </AppContainer>
  );
};
