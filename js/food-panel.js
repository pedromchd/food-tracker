$(function () {
  foods.forEach((food) => {
    const foodKey = food.imagem.replace(".png", "");
    $("#food-panel").append(`
        <div class="food-card">
          <span class="food-name">${food.alimento}</span>
          <span class="food-portion">Porção: 100g</span>
          <div class="food-image">
            <img
              src="img/foods/${food.imagem}"
              alt="${food.alimento}"
            />
          </div>
          <table class="food-info">
            <tr>
              <td>Carboidratos:</td>
              <td class="food-nutrient">
                ${unidadeNutriente(food.carboidratos)}
              </td>
            </tr>
            <tr>
              <td>Proteínas:</td>
              <td class="food-nutrient">
                ${unidadeNutriente(food.proteinas)}
              </td>
            </tr>
            <tr>
              <td>Gorduras:</td>
              <td class="food-nutrient">
                ${unidadeNutriente(food.gorduras)}
              </td>
            </tr>
            <tr>
              <td>Vitaminas:</td>
              <td class="food-vitamins">
                ${vitaminasPrincipais(food.vitaminasPrincipais)}
              </td>
            </tr>
          </table>
          <label for="food-quantity-${foodKey}">
            Quantidade:
            <input
              type="text"
              id="food-quantity-${foodKey}"
              class="food-quantity"
              size="8"
            />
            g
          </label>
        </div>
      `);
  });
});

function vitaminasPrincipais(vitaminas) {
  if (!vitaminas) {
    return "Nenhuma"; // se não houver vitaminas principais, retornar "Nenhuma"
  }
  let vitaminasPrincipais = vitaminas.map((vitamina) => {
    return `<span class="food-vitamin">${vitamina}</span>`; // criar um span para cada vitamina
  });
  return vitaminasPrincipais.join(""); // juntar todos os spans em uma string
}

function unidadeNutriente(valor) {
  if (valor <= 0) {
    return "0g";
  }
  if (valor >= 100) {
    return `${valor / 1000}g`;
  }
  return `${valor}mg`;
}

const foods = [
  {
    alimento: "Arroz branco",
    carboidratos: "28200",
    proteinas: "2700",
    gorduras: "300",
    fibras: "400",
    acucares: "100",
    sodio: "1",
    potassio: "35",
    calcio: "10",
    vitaminasPrincipais: null,
    imagem: "arroz_branco.png",
  },
  {
    alimento: "Feijão",
    carboidratos: "20000",
    proteinas: "9000",
    gorduras: "500",
    fibras: "1300",
    acucares: "1000",
    sodio: "2",
    potassio: "1500",
    calcio: "50",
    vitaminasPrincipais: ["B9"],
    imagem: "feijao.png",
  },
  {
    alimento: "Pão francês",
    carboidratos: "50000",
    proteinas: "9000",
    gorduras: "2500",
    fibras: "2500",
    acucares: "2500",
    sodio: "470",
    potassio: "120",
    calcio: "20",
    vitaminasPrincipais: null,
    imagem: "pao_frances.png",
  },
  {
    alimento: "Laranja",
    carboidratos: "11750",
    proteinas: "940",
    gorduras: "120",
    fibras: "1800",
    acucares: "9350",
    sodio: "1",
    potassio: "180",
    calcio: "40",
    vitaminasPrincipais: ["C", "A"],
    imagem: "laranja.png",
  },
  {
    alimento: "Carne bovina",
    carboidratos: "0",
    proteinas: "26000",
    gorduras: "20000",
    fibras: "0",
    acucares: "0",
    sodio: "65",
    potassio: "350",
    calcio: "15",
    vitaminasPrincipais: null,
    imagem: "carne_bovina.png",
  },
  {
    alimento: "Carne de frango",
    carboidratos: "0",
    proteinas: "31000",
    gorduras: "3600",
    fibras: "0",
    acucares: "0",
    sodio: "70",
    potassio: "300",
    calcio: "12",
    vitaminasPrincipais: null,
    imagem: "carne_de_frango.png",
  },
  {
    alimento: "Ovo",
    carboidratos: "720",
    proteinas: "13000",
    gorduras: "10000",
    fibras: "0",
    acucares: "0",
    sodio: "120",
    potassio: "126",
    calcio: "56",
    vitaminasPrincipais: ["B12", "D"],
    imagem: "ovo.png",
  },
  {
    alimento: "Café (sem açúcar)",
    carboidratos: "0",
    proteinas: "0",
    gorduras: "0",
    fibras: "0",
    acucares: "0",
    sodio: "5",
    potassio: "90",
    calcio: "0",
    vitaminasPrincipais: null,
    imagem: "cafe_sem_acucar.png",
  },
  {
    alimento: "Banana",
    carboidratos: "22840",
    proteinas: "1090",
    gorduras: "330",
    fibras: "2600",
    acucares: "12230",
    sodio: "1",
    potassio: "360",
    calcio: "5",
    vitaminasPrincipais: ["B6", "C"],
    imagem: "banana.png",
  },
  {
    alimento: "Batata branca",
    carboidratos: "17580",
    proteinas: "2020",
    gorduras: "100",
    fibras: "2200",
    acucares: "1250",
    sodio: "6",
    potassio: "425",
    calcio: "10",
    vitaminasPrincipais: ["C"],
    imagem: "batata_branca.png",
  },
];
