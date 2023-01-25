const express = require("express");
cors = require("cors");

const app = express();
app.use(cors());

const port = 8000;
const categories = [
  {
    id: 0,
    name: "blog",
  },
  {
    id: 0,
    name: "Technology",
  },
  {
    id: 0,
    name: "photo",
  },
];

const Article = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    name: "022 оны есдүгээр сарын 1-2-нд шилжих шөнө  согтууруулах ундаа хэрэглэсэн болон жолоодох эрх дуусгавар болсон үедээ тээврийн хэрэгсэл жолоодон зам тээврийн осол гаргаж, танхайрсан.",
    id: 12312,
    category: "blog",
  },
  {
    imageUrl:
      "https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg",
    name: "Цагдаагийн байгууллагаас шалгалтын ажиллагаа явуулахад уг этгээд нь ",
    id: 129,
    category: "Technology",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1EPPUj5AiLyXJutbItPwnmerf8e_rbzq8JJvVRHEvq_p4FMg5WCi3a-frc7dlXqsuQ8&usqp=CAU",
    name: " хэмээж, бусдын амгалан тайван байдлыг алдагдуулсан байж болзошгүй бичлэг цацагдсан.",
    id: 1238,
    category: "photo",
  },
  {
    imageUrl:
      "https://thumbs.dreamstime.com/b/information-letter-word-letterhead-34323511.jpg",
    name: "“Мерседес Бенз” маркийн тээврийн хэрэгслийн жолооч өөрийгөө",
    id: 1237,
    category: "photo",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR55vOIse4IYm6AV-7Bu8pQU6jGXYAO4qGYHymx2CGi-Uywn4FJSmvGepsEu4SVNgpNLyo&usqp=CAU",
    name: "Нийслэлийн Хан-Уул дүүргийн 11 дүгээр хороонд байрлах хотхон доторх замд",
    id: 1236,
    category: "Technology",
  },
  {
    imageUrl:
      "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg",
    name: "Browse premium related images on iStock | Save 20% with code UNSPLASH20",
    id: 1235,
    category: "Technology",
  },
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/business-financing-accounting-banking-concept-600w-2097482323.jpg",
    name: "ЧYour stories aren’t one-dimensional, neither is our content library",
    id: 1234,
    category: "Technology",
  },
  {
    imageUrl:
      "https://www.shutterstock.com/image-photo/business-financing-accounting-banking-concept-600w-2097482323.jpg",
    name: "ЧYour stories aren’t one-dimensional, neither is our content library",
    id: 123,
    category: "blog",
  },
];
app.get("/category/:categoryId", (request, response) => {
  const { categoryId } = request.params;
  const filteredArr = Article.filter((e) => {
    return e.category === categoryId;
  });
  console.log(categoryId);
  response.json(filteredArr);
});
// app.get("/category/:categoryId/Article/:id", (request, response) => {
//   const { categoryId } = request.params;

//   console.log("aaa");
//   response.json(filteredArr);
// });

app.get("/Article/:id", (request, response) => {
  const { id } = request.params;
  const filteredArr = Article.filter((e) => {
    return e.id === Number(id);
  });
  console.log(filteredArr);
  response.json(filteredArr);
});

app.get("/Article", (request, response) => {
  response.status(200);
  response.json(Article);
});
app.get("/categories", (request, response) => {
  response.status(200);
  response.json(categories);
});

app.get("/a", (request, response) => {
  response.status(100);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
