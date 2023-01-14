import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
// import HomePage from "./Pages/HomePage";
// import ModelPage from "./Pages/ModelPage";
// import NotFound from "./Pages/NotFound";
import HistoryListenrer from "./components/layout/HistoryListenrer";

const HomePage = lazy(() => import("./Pages/HomePage"));
const ModelPage = lazy(() => import("./Pages/ModelPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <Layout>
      <HistoryListenrer>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/Model/:modelId">
            <ModelPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </HistoryListenrer>
    </Layout>
  );
}

export default App;
