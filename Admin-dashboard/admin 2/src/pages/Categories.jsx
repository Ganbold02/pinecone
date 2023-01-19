import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import CategoriesList from "../components/Categories/CategoriesList";
import Heading from "../components/Heading";
import CategoriesCreate from "../components/Categories/CategoriesCreate";
import DynamicModal from "../components/utils/DynamicModal";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error("aldaa garlaa");
      });
  }, [categories]);

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Categories" handleShow={handleShow} />
        <CategoriesList items={categories} />
      </div>
      <ToastContainer />
      <DynamicModal
        show={modalShow}
        handleClose={handleClose}
        title="Create category"
        content={<CategoriesCreate />}
      />
    </>
  );
}
