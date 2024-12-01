import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import {persistor, store} from "./store.ts";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>

      <NextUIProvider>
        <App />
      </NextUIProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
