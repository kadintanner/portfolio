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
import Coding from "./Pages/Projects/Coding.jsx";
import Contact from "./Pages/Contact.jsx";
import Design from "./Pages/Projects/Design.jsx";
import Home from "./Pages/Home.jsx";
import Music from "./Pages/Projects/Music.jsx";
import Photography from "./Pages/Projects/Photography.jsx";
import Projects from "./Pages/Projects.jsx";
import Videography from "./Pages/Projects/Videography.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Coding" element={<Coding />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Design" element={<Design />} />
      <Route path="Music" element={<Music />} />
      <Route path="Photography" element={<Photography />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Videography" element={<Videography />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
