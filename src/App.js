import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

import ProductDeatils from "./pages/ProductDeatils";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/Welcome" />
          </Route>
          <Route path="/Welcome">
            <Welcome />
          </Route>
          <Route path="/Products" exact>
            <Products />
          </Route>
          <Route path="/Products/:productId">
            <ProductDeatils />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
