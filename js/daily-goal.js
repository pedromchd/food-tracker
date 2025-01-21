$(function () {
  window.weekMeals = [];

  $("#add-day").on("click", function () {
    const dayMeal = {
      carboidratos: 0,
      proteinas: 0,
      gorduras: 0,
    };

    window.dailyMeals.forEach((meal) => {
      dayMeal.carboidratos = sum(dayMeal.carboidratos, meal.carboidratos);
      dayMeal.proteinas = sum(dayMeal.proteinas, meal.proteinas);
      dayMeal.gorduras = sum(dayMeal.gorduras, meal.gorduras);
    });

    window.weekMeals.push(dayMeal);

    plotWeekMeals();
    clearDayMeals();
  });

  window.dailyGoal = {
    carboidratos: 1,
    proteinas: 1,
    gorduras: 1,
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

function plotWeekMeals() {
  $("#daily-meals-graph").html("<canvas id='daily-meals-chart'></canvas>");

  const percents = calcPercents(window.dailyGoal, window.weekMeals);

  new Chart($("#daily-meals-chart"), {
    type: "line",
    data: {
      labels: percents.dias,
      datasets: [
        {
          label: "Carboidratos",
          data: percents.carboidratos,
          borderColor: "#ff924c",
          backgroundColor: "#ff924c",
          fill: false,
        },
        {
          label: "Proteínas",
          data: percents.proteinas,
          borderColor: "#80b918",
          backgroundColor: "#80b918",
          fill: false,
        },
        {
          label: "Gorduras",
          data: percents.gorduras,
          borderColor: "#ff5c8a",
          backgroundColor: "#ff5c8a",
          fill: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Meta diária em %",
          color: "#fff",
          font: { size: 16 },
        },
        legend: {
          labels: {
            color: "#fff",
            font: { size: 16 },
          },
        },
      },
    },
  });
}

function calcPercents(goal, meals) {
  return {
    dias: meals.map((meal, index) => `Dia ${index + 1}`),
    carboidratos: meals.map(
      (meal) => (meal.carboidratos / goal.carboidratos) * 100
    ),
    proteinas: meals.map((meal) => (meal.proteinas / goal.proteinas) * 100),
    gorduras: meals.map((meal) => (meal.gorduras / goal.gorduras) * 100),
  };
}
