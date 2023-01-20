import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
// import PostCreate from "./components/Blogs/PostCreate";
>>>>>>> 16ae49d643d526ab700e344769f0ed3f16417cff
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import SignIn from "./pages/SignIn";
import SignInError from "./pages/SignInError";
import Singup from "./pages/Singup";
import SigninSuccess from "./pages/SinginSuccess";
import Signout from "./pages/Signout";
export default function App() {
  const [me, setMe] = useState(undefined);

  // const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  useEffect(() => {
    const myData = localStorage.getItem("me");
    if (myData !== "undefined") {
      setMe(JSON.parse(myData));
    }
  }, []);

  if (!me) {
    return (
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/signin/success"
          element={<SigninSuccess setMe={setMe} />}
        />
        <Route path="/signup" element={<Singup />} />
        <Route path="*" element={<SignInError />} />
      </Routes>
    );
  }

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/Signout" element={<Signout setMe={setMe} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
