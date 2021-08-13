import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "views/Auth";
import NotFound from "views/NotFound";
import AddGood from "views/AddGood";
import GoodList from "views/GoodList";
import GoodDetail from "views/GoodDetail";
import { Box } from "@material-ui/core";
import SignInForm from "components/auth/SignInForm";
import SignUpForm from "components/auth/SignUpForm";
import { useStateStore } from "store";

function AppContent() {
  const isLogin = useStateStore().isLogin;

  return (
    <Box component="main" height="90vh" width="100vw">
      <Switch>
        <Route exact path="/signin">
          {isLogin ? <Redirect to="/good" /> : <Auth form={<SignInForm />} />}
        </Route>
        <Route exact path="/signup">
          <Auth form={<SignUpForm />} />
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
