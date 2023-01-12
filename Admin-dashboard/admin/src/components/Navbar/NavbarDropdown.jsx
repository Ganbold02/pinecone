import { useState } from "react";

function DropdownDivider() {
  return (
    <li>
      <hr className="dropdown-divider" />
    </li>
  );
}
function DropdownItem() {
  return (
    <li>
      <a className="dropdown-item" href={item.link}>
        {item.label}
      </a>
    </li>
  );
}

export default function NavbarDropdown({ img, items }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="dropdown text-end">
      <a
        onClick={toggleDropdown}
        className="d-block link-dark text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src={img}
          alt="mdo"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </a>
      <ul
        className={`dropdown-menu text-small end-0 ${showDropdown && "show"}`}
      >
        {items.map((item) => {
          if (item.label === "---") return<DropdownDivider key={`dropdown-item-${index}`}/>
            return <DropdownItem/>
        })}
      </ul>
    </div>
  );
}
