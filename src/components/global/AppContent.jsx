import { Route, Switch } from "react-router-dom";
import SignIn from "views/SignIn";
import SignUp from "views/SignUp";
import NotFound from "views/NotFound";
import AddGood from "views/AddGood";
import GoodList from "views/GoodList";
import GoodDetail from "views/GoodDetail";
import { Box } from "@material-ui/core";

function AppContent() {
  return (
    <Box component="main" height="90vh" width="100vw">
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
    </Box>
  );
}

export default AppContent;
