import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminPage from "./pages/AdminPage.tsx";
import HomeGroupPage from "./pages/activities/HomeGroupPage.tsx";
import BKCKidsPage from "./pages/activities/BKCKidsPage.tsx";
import CalendarPage from "./pages/schedules/CalendarPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "homeGroup", element: <HomeGroupPage /> },
      { path: "bkcKids", element: <BKCKidsPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "calendar", element: <CalendarPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
