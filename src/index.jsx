import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { StoreProvider } from "store";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <CssBaseline />
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
