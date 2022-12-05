// const names = [
//   "Эрмүүн",
//   "Тэмүүлэн",
//   "Өсөхбаяр",
//   "Сүхбат",
//   "Тэмүүлэн",
//   "Ганболд",
//   "амур",
//   "Дөлгөөн",
//   "Намуунбайгаль",
//   "Балжинням",
//   "Ананд",
//   "Одбаяр",
//   "Наранцэцэг",
//   "Аймерген",
//   "Тэнгисболд",
//   "Биндэръяа",
//   "Индра",
//   "Сэд-Эрдэнэ",
// ];

// let sum = 0;
// for (let i = 0; i < names.length; i++) {
//   if (names[i][0] === "Т") sum++;
// }
// confirm.log(`үсгээ эхэлсэн хүн нийт ${sum}`);
// const result=[60,70,80,90,95,70,76];
// let resultSum=0;
// for(let i=0; i<result.length; i++){
//   resultSum=
// }
let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 8, 6, 290, 11];
//Array доторх тоонуудын нийлбэрийг ол.
let sum = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i];
}
console.log(sum);
//Хамгийн их тоог ол

let MaxNumber = 0;
for (let t = 0; t < arrayOfNumbers.length; t++) {
  if (MaxNumber < arrayOfNumbers[t]) {
    MaxNumber = arrayOfNumbers[t];
  }
}
console.log(MaxNumber);
//Хамгийн бага тоог ол
let MinNumber = arrayOfNumbers.length;
for (let m = 0; m < arrayOfNumbers.length; m++) {
  if (MinNumber > arrayOfNumbers[m]) {
    MinNumber = arrayOfNumbers[m];
  }
}
console.log(MinNumber);

arrayOfNumbers[arrayOfNumbers.length] = 100;
arrayOfNumbers[arrayOfNumbers.length - 0] = 54;
let sumf = 0;
for (let f = arrayOfNumbers.length - 1; f >= 0; f--) {
  arrayOfNumbers[f + 1] = arrayOfNumbers[f];
}
arrayOfNumbers[0] = 200;

console.log(arrayOfNumbers);
let ogno = new Date(0);
console.log(ogno);
