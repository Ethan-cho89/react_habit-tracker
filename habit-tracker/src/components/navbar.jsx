import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <h1>
          ✨HABIT TRACKER
          <span className="habit-count">{this.props.totalCount}</span>
        </h1>
      </div>
    );
  }
}

export default Navbar;
