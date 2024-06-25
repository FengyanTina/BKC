import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,

  RouterProvider,

  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AdminPage from "./pages/AdminPage.tsx";
import HomeGroupPage from './pages/activities/HomeGroupPage.tsx';
import BKCKidsPage from './pages/activities/BKCKidsPage.tsx';
import CalendarPage from './pages/schedules/CalendarPage.tsx';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<App />}>
        <Route index element={<App />} />
        <Route path="homeGroup" element={<HomeGroupPage />} />
        <Route path="bkcKids" element={<BKCKidsPage/>} />
        <Route path="admin" element={<AdminPage />}>
          <Route
            path="homeGroup/new"
            
          />
           {/* <Route
            path="homeGroup/ad"
            element={<ProductDialog mode={ProductDialogMode.Edit} />}
          /> */}
        </Route> 
        <Route path="calender" element={<CalendarPage />} />
      </Route>
    )
  );
  


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>,
)
