import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

function HistoryListenrer(props) {
  useEffect(() => {
    const listener = props.history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => listener();
  }, []);

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default withRouter(HistoryListenrer);
