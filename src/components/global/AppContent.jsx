import { Route, Switch } from "react-router-dom";
import { SignIn } from "views/SignIn";
import { SignUp } from "views/SignUp";
import { NotFound } from "views/NotFound";
import { AddGood } from "views/AddGood";
import { GoodList } from "views/GoodList";
import { GoodDetail } from "views/GoodDetail";

function AppContent() {
  return (
    <Switch>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/addgood">
        <AddGood />
      </Route>
      <Route exact path="/good/:goodId">
        <GoodDetail />
      </Route>
      <Route exact path={["/good", "/"]}>
        <GoodList />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export { AppContent };
