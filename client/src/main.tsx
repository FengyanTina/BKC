import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminPage from "./pages/AdminPage.tsx";
import HomeGroupPage from "./pages/activities/HomeGroupPage.tsx";
import BKCKidsPage from "./pages/activities/BKCKidsPage.tsx";
import CalendarPage from "./pages/schedules/CalendarPage.tsx";
import ServicesMainPage from "./pages/services/ServicesMainPage.tsx";
import SchedulesMainPage from "./pages/schedules/SchedulesMainPage.tsx";
import ActivitiesMainPage from "./pages/activities/ActivitesMainPage.tsx";
import StartPage from "./pages/StartPage.tsx";
import ContactMainPage from "./pages/contact/ContactMainPage.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path: "home", element: <StartPage /> },
      { path: "services", element: <ServicesMainPage /> },
      { path: "schedules", element: <SchedulesMainPage /> },
      { path: "admin", element: <AdminPage /> },
      { path: "activities", element: <ActivitiesMainPage /> },
      { path: "contact", element: <ContactMainPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
