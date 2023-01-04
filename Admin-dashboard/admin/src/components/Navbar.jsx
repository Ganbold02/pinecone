import { useState } from "react";
import NavbarMenu from "./Navbar/navbarmenu";
import NavbarWrapper from "./Navbar/NavbarWrapper";
import NavbarDropdown from "./Navbar/NavbarDropdown";
export default function Navbar() {
  const menuitems = [{ label: "home", link: "#" }];
  const dropdownItems = [
    { label: "Profile", link: "#" },
    { label: "Inbox", link: "#" },
    { label: "Settings", link: "#" },
    { label: "---", link: "#" },
    { label: "Sign out", link: "#" },
  ];
  return (
    <NavbarWrapper>
      <NavbarMenu title="Admin" items={menuitems} />
      <NavbarDropdown
        img={"https://avatars.githubusercontent.com/u/81268891?s=200&v=4"}
        items={dropdownItems}
      />
    </NavbarWrapper>
  );
}
