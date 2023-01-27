import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import CategoriesList from "../components/Categories/CategoriesList";
import Heading from "../components/Heading";
import CategoriesCreate from "../components/Categories/CategoriesCreate";
import DynamicModal from "../components/utils/DynamicModal";
import CategoriesEdit from "../components/Categories/CategoriesEdit";
import axios from "axios";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  useEffect(() => {
    axios
      .get("http://localhost:8000/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  }, []);

  const modalClose = () => {
    setModalContent(<></>);
    setModalShow(false);
  };
  const afterSubmit = (category) => {
    modalClose();
    setCategories([...categories, category]);
  };
  const showCreateModal = () => {
    setModalContent(<CategoriesCreate afterSubmit={afterSubmit} />);

    setModalShow(true);
  };

  const afterEdit = (categories) => {
    modalClose();
    let newCategories = categories.map((cat) => {
      if (cat.id === categories.id) {
        return categories;
      }
      return cat;
    });
    setCategories(newCategories);
  };
  const showEditModal = (categoties) => {
    setModalContent(
      <CategoriesEdit categories={categoties} afterEdit={afterEdit} />
    );
    setModalShow(true);
  };
  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={showCreateModal} />
        <CategoriesList items={categories} onEdit={showEditModal} />
      </div>
      <ToastContainer />
      <DynamicModal
        content={modalContent}
        show={modalShow}
        handleClose={modalClose}
        title="Create category"
      />
    </>
  );
}
