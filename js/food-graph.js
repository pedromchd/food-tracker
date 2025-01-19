$(function () {
  $("#create-food-graph").on("click", () => {
    window.userMeal = {};

    $(".food-quantity input").each((index, food) => {
      const foodKey = $(food).data("food");
      const quantity = parseFloat($(food).val());
      if (quantity > 0) {
        window.userMeal[foodKey] = getFoodData(foodKey, quantity);
      }
      $(food).val("");
    });

    if (Object.keys(window.userMeal).length === 0) {
      alert("Selecione pelo menos um alimento");
      $("#food-graph").empty();
      return;
    }

    $("#food-graph")
      .empty()
      .append('<div><canvas id="valor-energetico"></canvas></div>');

    new Chart($("#valor-energetico"), {
      type: "bar",
      data: {
        labels: Object.values(window.userMeal).map((food) => food.alimento),
        datasets: [
          {
            label: "Valor Energético (kcal)",
            data: Object.values(window.userMeal).map(
              (food) => food.valorEnergetico
            ),
            borderWidth: 1,
            borderColor: "#ecec12",
            backgroundColor: "#f3f385",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: { color: "#fff" },
            grid: { color: "#fff" },
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#fff" },
            grid: { color: "#fff" },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#fff",
              font: { size: 16 },
            },
          },
        },
      },
    });
  });
});

function getFoodData(foodKey, quantity) {
  const food = window.foods[foodKey];

  foodData = {
    alimento: food.alimento,
    quantidade: quantity,
    carboidratos: calcNutrientGrams(food.carboidratos, quantity),
    proteinas: calcNutrientGrams(food.proteinas, quantity),
    gorduras: calcNutrientGrams(food.gorduras, quantity),
  };

  valorEnergetico = calcEnergyValue(foodData);
  foodData.valorEnergetico = valorEnergetico;

  return foodData;
}

function calcNutrientGrams(nutrientMgPer100g, foodQuantityGrams) {
  const nutrientGrams = (nutrientMgPer100g / 1000) * (foodQuantityGrams / 100);
  return parseFloat(nutrientGrams.toFixed(2));
}

function calcEnergyValue({ carboidratos, proteinas, gorduras }) {
  const energyValue = carboidratos * 4 + proteinas * 4 + gorduras * 9;
  return parseFloat(energyValue.toFixed(2));
}
