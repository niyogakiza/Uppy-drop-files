import React from "react";
import { Route, Link } from "react-router-dom";
import ImageList from "./ImageList";

const Menu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Upload</Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={ImageList} />
    </div>
  );
};

export default Menu;
