import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./styles/theme.css";
import "./styles/global.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            fontSize: "18px",
            padding: "18px 22px",
            width: "auto",
            maxWidth: "92vw",   // prevents overflow on mobile
            borderRadius: "12px",
            background: "#1E1E1E",
            color: "#F2F4F6",
            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
            border: "1px solid #2A2A2A",
          },

          success: {
            iconTheme: {
              primary: "#0A6FB5",
              secondary: "#F2F4F6",
            },
            style: {
              background: "#0A6FB5",
              color: "#FFFFFF",
            },
          },

          error: {
            iconTheme: {
              primary: "#FFFFFF",
              secondary: "#C0392B",
            },
            style: {
              background: "#C0392B",
              color: "#FFFFFF",
            },
          },

          loading: {
            iconTheme: {
              primary: "#BFC5CC",
              secondary: "#1E1E1E",
            },
            style: {
              background: "#1E1E1E",
              color: "#BFC5CC",
            },
          },
        }}
      />

      <App />
    </>
  </StrictMode>
);
