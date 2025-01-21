$(function () {
  window.dailyMeals = [];

  $("#add-meal-btn").on("click", function () {
    const mealData = {
      refeicao: "",
      carboidratos: 0,
      proteinas: 0,
      gorduras: 0,
    };

    for (const [foodKey, foodData] of Object.entries(window.userMeal)) {
      mealData.carboidratos = sum(mealData.carboidratos, foodData.carboidratos);
      mealData.proteinas = sum(mealData.proteinas, foodData.proteinas);
      mealData.gorduras = sum(mealData.gorduras, foodData.gorduras);
    }

    const refeicao = $("#meal-name").val();
    if (refeicao === "") {
      alert("Por favor, insira um nome para a refeição");
      return;
    }

    mealData.refeicao = refeicao;
    $("#meal-name").val("");

    window.dailyMeals.push(mealData);

    $("#daily-meals tbody").append(`
      <tr>
        <td>${mealData.refeicao}</td>
        <td>${mealData.carboidratos}</td>
        <td>${mealData.proteinas}</td>
        <td>${mealData.gorduras}</td>
      </tr>
    `);
  });
});

function sum(a, b) {
  res = a + b;
  return parseFloat(res.toFixed(2));
}
