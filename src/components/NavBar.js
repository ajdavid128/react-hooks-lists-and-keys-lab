import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a key={`#${links[1]}`} href={`#${links[1]}`}>home</a>
      <a key={`#${links[2]}`} href={`#${links[2]}`}>about</a>
      <a key={`#${links[3]}`} href={`#${links[3]}`}>projects</a>
      {/* display an <a> tag for each link here */}
    </nav>);
}

export default NavBar;
