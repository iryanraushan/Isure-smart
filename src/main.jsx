import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@material-tailwind/react";

const CLIENT_ID = await import.meta.env.VITE_CLIENT_ID;
const DOMAIN_ID = await import.meta.env.VITE_DOMAIN_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN_ID}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Auth0Provider>
  </React.StrictMode>
);
