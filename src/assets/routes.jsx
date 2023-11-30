// Routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes as ReactRoutes,
} from "react-router-dom";

import Home from "./pages/home";
import Notes from "./pages/notes";
import Shop from "./pages/shop";

const MyRoutes = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          {" "}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>

        <ReactRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/shop" element={<Shop />} />
        </ReactRoutes>
      </div>
    </Router>
  );
};

export default MyRoutes;
