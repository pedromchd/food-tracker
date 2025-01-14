// Nova política CORS não permite carregamento de arquivo local client-side
// $(function () {
//   $("main").text("Food Panel");
//   $.get("/data/foods.csv", (data) => {
//     foods = $.csv.toObjects(data);
//     console.table(foods);
//   });
// });

const foods = [
  {
    Alimento: "Arroz branco",
    "Carboidratos (mg)": "28.200",
    "Proteínas (mg)": "2.700",
    "Gorduras (mg)": "300",
    "Fibras (mg)": "400",
    "Açúcares (mg)": "100",
    "Sódio (mg)": "1",
    "Potássio (mg)": "35",
    "Cálcio (mg)": "10",
    "Vitaminas Principais": "-",
  },
  {
    Alimento: "Feijão",
    "Carboidratos (mg)": "20.000",
    "Proteínas (mg)": "9.000",
    "Gorduras (mg)": "500",
    "Fibras (mg)": "1.300",
    "Açúcares (mg)": "1.000",
    "Sódio (mg)": "2",
    "Potássio (mg)": "1.500",
    "Cálcio (mg)": "50",
    "Vitaminas Principais": "B9",
  },
  {
    Alimento: "Pão francês",
    "Carboidratos (mg)": "50.000",
    "Proteínas (mg)": "9.000",
    "Gorduras (mg)": "2.500",
    "Fibras (mg)": "2.500",
    "Açúcares (mg)": "2.500",
    "Sódio (mg)": "470",
    "Potássio (mg)": "120",
    "Cálcio (mg)": "20",
    "Vitaminas Principais": "-",
  },
  {
    Alimento: "Laranja",
    "Carboidratos (mg)": "11.750",
    "Proteínas (mg)": "940",
    "Gorduras (mg)": "120",
    "Fibras (mg)": "1.800",
    "Açúcares (mg)": "9.350",
    "Sódio (mg)": "1",
    "Potássio (mg)": "180",
    "Cálcio (mg)": "40",
    "Vitaminas Principais": "C, A",
  },
  {
    Alimento: "Carne bovina",
    "Carboidratos (mg)": "0",
    "Proteínas (mg)": "26.000",
    "Gorduras (mg)": "20.000",
    "Fibras (mg)": "0",
    "Açúcares (mg)": "0",
    "Sódio (mg)": "65",
    "Potássio (mg)": "350",
    "Cálcio (mg)": "15",
    "Vitaminas Principais": "-",
  },
  {
    Alimento: "Carne de frango",
    "Carboidratos (mg)": "0",
    "Proteínas (mg)": "31.000",
    "Gorduras (mg)": "3.600",
    "Fibras (mg)": "0",
    "Açúcares (mg)": "0",
    "Sódio (mg)": "70",
    "Potássio (mg)": "300",
    "Cálcio (mg)": "12",
    "Vitaminas Principais": "-",
  },
  {
    Alimento: "Ovo",
    "Carboidratos (mg)": "720",
    "Proteínas (mg)": "13.000",
    "Gorduras (mg)": "10.000",
    "Fibras (mg)": "0",
    "Açúcares (mg)": "0",
    "Sódio (mg)": "120",
    "Potássio (mg)": "126",
    "Cálcio (mg)": "56",
    "Vitaminas Principais": "B12, D",
  },
  {
    Alimento: "Café (sem açúcar)",
    "Carboidratos (mg)": "0",
    "Proteínas (mg)": "0",
    "Gorduras (mg)": "0",
    "Fibras (mg)": "0",
    "Açúcares (mg)": "0",
    "Sódio (mg)": "5",
    "Potássio (mg)": "90",
    "Cálcio (mg)": "0",
    "Vitaminas Principais": "-",
  },
  {
    Alimento: "Banana",
    "Carboidratos (mg)": "22.840",
    "Proteínas (mg)": "1.090",
    "Gorduras (mg)": "330",
    "Fibras (mg)": "2.600",
    "Açúcares (mg)": "12.230",
    "Sódio (mg)": "1",
    "Potássio (mg)": "360",
    "Cálcio (mg)": "5",
    "Vitaminas Principais": "B6, C",
  },
  {
    Alimento: "Batata branca",
    "Carboidratos (mg)": "17.580",
    "Proteínas (mg)": "2.020",
    "Gorduras (mg)": "100",
    "Fibras (mg)": "2.200",
    "Açúcares (mg)": "1.250",
    "Sódio (mg)": "6",
    "Potássio (mg)": "425",
    "Cálcio (mg)": "10",
    "Vitaminas Principais": "C",
  },
];

$(function () {
  $("main").text("Food Panel");
  $.get("/data/foods.csv", (data) => {
    foods = $.csv.toObjects(data);
    console.table(foods);
  });
});
