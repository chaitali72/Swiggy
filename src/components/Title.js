import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <Link to="/">
      <h1 className="text-2xl px-3 py-2 text-blue-800">ORDER FOOD</h1>
    </Link>
  );
}

export default Title;
