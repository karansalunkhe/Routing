import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>The welcome to the page</h1>
      <Route path="/Welcome/new-user">
        <h1>Hello form new users</h1>
      </Route>
    </div>
  );
};

export default Welcome;
