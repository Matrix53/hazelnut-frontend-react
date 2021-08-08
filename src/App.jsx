import AppHeader from "components/global/AppHeader";
import AppContent from "components/global/AppContent";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
    >
      <AppHeader />
      <AppContent />
    </Grid>
  );
}

export default App;
