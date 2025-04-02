import React, { Children } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { authenticated, ready } = usePrivy();
  if (!ready) {
    return <div>Loading...</div>;
  }
  return authenticated ? Children : <Navigate to="/login" />;
};

export default PrivateRoute;
