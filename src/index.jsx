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
        <SnackbarProvider
          autoHideDuration={2000}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
