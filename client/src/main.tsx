import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ServicesMainPage from "./pages/services/ServicesMainPage.tsx";
import SchedulesMainPage from "./pages/schedules/SchedulesMainPage.tsx";
import ActivitiesMainPage from "./pages/activities/ActivitesMainPage.tsx";
import StartPage from "./pages/StartPage.tsx";
import ContactMainPage from "./pages/contact/ContactMainPage.tsx";
import NewsMainPage from "./pages/news/NewsMainPage.tsx";
import LogInPage from "./pages/LogIn/LogInPage.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import AboutUsPage from "./pages/aboutUs/AboutUsPage.tsx";
import { UserProvider } from "./context/UserContext.tsx";
import { UserDialogMode } from "./models/User.ts";
import UserDialog from "./components/common/Forms/UserDialog.tsx";


const router = createBrowserRouter(
    [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <StartPage /> },
      { path: "services", element: <ServicesMainPage /> },
      { path: "schedules", element: <SchedulesMainPage /> },
      { path: "logIn", element: <LogInPage /> },
      { path: "activities", element: <ActivitiesMainPage /> },
      { path: "news", element: <NewsMainPage /> },
      { path: "contact", element: <ContactMainPage /> },
      { path: "aboutUs", element: <AboutUsPage /> },
      { path: "user/new", element:<UserDialog mode={UserDialogMode.Add} /> },
      { path: "user/:id", element:<UserDialog mode={UserDialogMode.Edit} /> },
    //   <Route
    //       path="user/new"
    //       element={<UserDialog mode={UserDialogMode.Add} />}
    //     />
    //     <Route
    //       path="user/:id"
    //       element={<UserDialog mode={UserDialogMode.Edit} />}
    //     />
    //   </Route>
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
        <UserProvider>
    <RouterProvider router={router} />
    </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
