const getCars = async () => {
  const res = await fetch("http://localhost:3333/api/cars");
  const data = await res.json();
  console.log(data);
  return data;
};
getCars();
const currencyFormatter = (value) => {
  return new Intl.NumberFormat("mn-Mn", { maxnumSignificantDigits: 3 }).format(
    value
  );
};
const getCarCard = (car) => {
  return `
  <div class="col-3">
    <div class="card">
      <div class="ratio ratio-4x3">
        <img class="card-img-top" src="${car.imageUrl}" />
      </div>
      <div class="card-body">
        <p class="card-name">${car.model}</p>
        <p class="card-category">${car.brand}</p>
        <p class="card-name card-price">${car.price}</p>

        <div class="d-flex justify-content-end gap-3"></div>
        <button type="button" onClick="deleteCar(${car.id})">ustgah </button>
        <button type="button">zasah </button>
      </div>
    </div>
  </div>`;
};
const carsTarget = document.querySelector("#cars");
const getCarsHtml = async () => {
  carsTarget.innerHTML = "";
  const cars = await getCars();
  for (const car of cars) {
    carsTarget.innerHTML += getCarCard(car);
  }
};
getCarsHtml();

const submitbtn = document.querySelector("#formSubmit");
const imageUrTarget = document.querySelector("#imageUrl");
const modelTarget = document.querySelector("#model");
const brandTarget = document.querySelector("#brand");
const priceTarget = document.querySelector("#price");

submitbtn.addEventListener("click", async () => {
  console.log(brandTarget.value);
  const newCar = {
    imageUrl: imageUrTarget.value,
    model: modelTarget.value,
    brand: brandTarget.value,
    price: priceTarget.value,
  };
  console.log("newcar : " + newCar);
  const reg = await fetch("http://localhost:3333/api/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCar),
  });
  const res = await reg.json();
  console.log(res);
  getCarsHtml();
});

const deleteCar = async (id) => {
  if (confirm("Устгах уу?")) {
    fetch("http://localhost:3333/api/cars", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.warn(err);
        alert("aldaa");
        getCarsHtml();
      });
  }
};
