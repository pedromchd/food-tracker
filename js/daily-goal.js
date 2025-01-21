$(function () {
  window.weekMeals = [];

  $("#add-day").on("click", function () {
    const dayMeal = {
      carboidratos: 1,
      proteinas: 1,
      gorduras: 1,
    };

    window.dailyMeals.forEach((meal) => {
      dayMeal.carboidratos = sum(dayMeal.carboidratos, meal.carboidratos);
      dayMeal.proteinas = sum(dayMeal.proteinas, meal.proteinas);
      dayMeal.gorduras = sum(dayMeal.gorduras, meal.gorduras);
    });

    window.weekMeals.push(dayMeal);
    clearDayMeals();
  });

  window.dailyGoal = {
    carboidratos: 0,
    proteinas: 0,
    gorduras: 0,
  };

  $("#set-goal-btn").on("click", function () {
    dailyGoal.carboidratos = parseFloat($("#carb-goal").val());
    dailyGoal.proteinas = parseFloat($("#prot-goal").val());
    dailyGoal.gorduras = parseFloat($("#fat-goal").val());

    if (
      window.dailyGoal.carboidratos === 0 ||
      window.dailyGoal.proteinas === 0 ||
      window.dailyGoal.gorduras === 0
    ) {
      alert("A meta diária não pode ser zero!");
      return;
    }

    plotWeekMeals();
  });
});

function clearDayMeals() {
  window.dailyMeals = [];
  $("#daily-meals tbody").html(`
    <tr>
      <th>Refeição</th>
      <th>Carboidratos (g)</th>
      <th>Proteínas (g)</th>
      <th>Gorduras (g)</th>
    </tr>
  `);
}

function plotDailyMeals() {}
