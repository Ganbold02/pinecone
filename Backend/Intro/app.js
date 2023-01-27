const express = require("express");
cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const app = express();
app.use(cors());

const port = 8000;
let categories = [
  {
    id: 1,
    name: "Bloog",
  },
  {
    id: 2,
    name: "Technology",
  },
  {
    id: 3,
    name: "photo",
  },
];
let nextCatId = categories.length;
const Article = [
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    name: "Үнэгүй зогсоолтой, үндэсний үйлдвэрлэгчдийн үзэсгэлэн худалдаа",
    id: 12312,
    category: "blog",
    details: `Малчин Б.Ариунзаяа Улаанбаатар хотоос 870 километрийн зайд байрлах Баянхонгор аймгийн Баянлиг сумаас иржээ. Тэрбээр сарлагийн цэвэр шар тос, ааруул, ингэний хоормогоо борлуулахаар сар шинийн баярыг угтан зохион байгуулж буй "Амар байна уу" үзэсгэлэн худалдааг зорьж ирсэн. Энэ үзэсгэлэн худалдаанд 21 аймаг, нийслэлийн есөн дүүргийн иргэн, малчин, аж ахуйн нэгж оролцож үндэсний үйлдвэрлэлийн бүтээгдэхүүнээ худалдаалж байгаа юм. Тэдний нэг нь малчин Б.Ариунзаяа. Түүний борлуулж буй шар тос килограмм нь 35 мянга, ааруул 25 мянган төгрөгийн үнэтэй.`,
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
app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  let category = null;

  for (const row of categories) {
    if (id == row.id) {
      category = row;
      break;
    }
  }
  res.json(category);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  console.log("id:", id);
  categories = categories.filter((row) => {
    return row.id !== Number(id);
  });
  res.json(id);
});

app.get("/a", (request, response) => {
  response.status(100);
});

app.post("/categories", jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategory = { id: nextCatId++, name };
  categories.push(newCategory);
  res.send(newCategory);
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  console.log("id:", id);
  categories = categories.findIndex((item) => {
    return item.id !== Number(id);
  });
  console.log("id:", categories);
  res.json(id);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
