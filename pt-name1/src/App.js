import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/Navbar/Heading";
import React from "react";
import Select from "react-select";
import MainContent from "./components/MainContent/Maincontent";
import Tablecontent from "./components/MainContent/TableContent";
import TableFile from "./components/MainContent/TableFile";
import { useState } from "react";
import DynamicModal from "./components/utils/Modal";
import PostCreate from "./components/Blogs/PostCreate";
import State from "./State";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <DynamicModal
        show={show}
        handleClose={handleClose}
        title="create post"
        content={<PostCreate />}
      />
      <Navbar />
      <MainContent>
        <HeaderSection handleShow={handleShow} />
        <Tablecontent>
          <TableFile />
        </Tablecontent>
      </MainContent>
    </>
  );
}

export default App;
