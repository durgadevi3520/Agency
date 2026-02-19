import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

/* Global Styles */
import "./styles/global.css";
import "./styles/premium.css";
import "./styles/button.css";
import "./styles/navbar.css";
import "./styles/footer.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
