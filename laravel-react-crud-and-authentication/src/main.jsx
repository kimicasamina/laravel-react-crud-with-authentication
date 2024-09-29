import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/contextProvider.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ContextProvider>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </ContextProvider>
    </StrictMode>
);
