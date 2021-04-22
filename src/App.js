import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useAppData } from "./AppContext";
import { ContactsPage } from "./ContactsPage";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { PageNotFound } from "./PageNotFound";
import { fetchUsersList } from "./shared/api";

const AppContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 20px;
  width: 700px;
  height: max-content;
  background: #f9f9fb;
`;

export const App = () => {
  const { setContacts } = useAppData();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUsersList();
      setContacts(data);
    };
    loadData();
  }, [setContacts]);

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
