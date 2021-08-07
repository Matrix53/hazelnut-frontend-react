import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

function App() {
  return (
    <div className="App">
      <AppBar>
        <Tabs
        >
          <Tab label="Item One"/>
          <Tab label="Item Two" />
          <Tab label="Item Three"  />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default App;
