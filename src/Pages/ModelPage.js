import React from "react";
import { useParams } from "react-router-dom";

import Model from "../components/models/model.js";

function ModelPage() {
  const param = useParams();

  return <Model />;
}

export default ModelPage;
