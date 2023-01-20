import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="brand" href="/">
                <a href="#">my blog</a>
              </div>
              <div className="search-btn">
                <IoSearchOutline />
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <nav>
              <ul>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
