import React, { Component } from "react";

function NavBar({ total }) {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar {total}
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
