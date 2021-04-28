import React from "react";

const Navbar = (props) => {
  const totalCount = props.totalCount > 0 ? props.totalCount : 0;
  return (
    <div className="navbar">
      <i className="fab fa-pagelines"></i>
      <span className="navbar-text">Habit Tracker ver.2</span>
      <span className="navbar-count">{totalCount}</span>
    </div>
  );
};

export default Navbar;
