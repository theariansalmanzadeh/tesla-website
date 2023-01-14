import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import styles from "./style/loading.module.css";
import HistoryListenrer from "./components/layout/HistoryListenrer";
import logo from "./images/logo.png";
const HomePage = lazy(() => import("./Pages/HomePage"));
const ModelPage = lazy(() => import("./Pages/ModelPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));

const loadingPage = (
  <div className={styles.loading}>
    <img src={logo} alt="tesla logo" className={styles.logoLoading} />
  </div>
);

function App() {
  return (
    <Layout>
      <HistoryListenrer>
        <Suspense fallback={loadingPage}>
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
        </Suspense>
      </HistoryListenrer>
    </Layout>
  );
}

export default App;
