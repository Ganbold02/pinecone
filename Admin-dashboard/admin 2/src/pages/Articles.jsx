import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import PostList from "../components/Blogs/PostList";
import Heading from "../components/Heading";
import PostCreate from "../components/Blogs/PostCreate";
import DynamicModal from "../components/utils/DynamicModal";

export default function Articles() {
  const [articles, setArticles]=useState([]);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  useEffect(()=>{
    fetch('https://demo-api-one.vercel.app/api/articles')
    .then((res)=>res.json())
    .then((data)=>{
      setArticles(data.body);
    })
    .catch((err)=>{
      console.log(err);
      toast.error('Алдаа гарлаа');
    });
  },[]);

  return (
    <>
      <div className="container-sm body-container">
        <Heading title="Blog posts" handleShow={handleShow} />
        <PostList items={articles} />
      </div>
      <ToastContainer />
      <DynamicModal
        show={modalShow}
        handleClose={handleClose}
        title="Create post"
        content={<PostCreate />}
      />
    </>
  );
}
