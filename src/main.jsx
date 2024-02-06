import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Project1 from "./Pages/Projects/Project1.jsx";
import Project2 from "./Pages/Projects/Project2.jsx";
import Project3 from "./Pages/Projects/Project3.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Project1" element={<Project1 />} />
      <Route path="Project2" element={<Project2/>} />
      <Route path="Project3" element={<Project3 />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
