function atualizarGraficoDia() {
    const totals = refeicoesDia.reduce(
      (acc, cur) => {
        acc.proteinas += cur.proteinas;
        acc.carboidratos += cur.carboidratos;
        acc.gorduras += cur.gorduras;
        return acc;
      },
      { proteinas: 0, carboidratos: 0, gorduras: 0 }
    );
  
    const data = [
      (totals.proteinas / metaDiaria.proteinas) * 100 || 0,
      (totals.carboidratos / metaDiaria.carboidratos) * 100 || 0,
      (totals.gorduras / metaDiaria.gorduras) * 100 || 0,
    ];
  
    const ctx = document.getElementById("grafico-dia").getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Proteínas", "Carboidratos", "Gorduras"],
        datasets: [
          {
            data: data,
            backgroundColor: ["#ff6ec4", "#7873f5", "#4bc0c0"],
            borderColor: "#fff",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: "#fff",
            },
          },
        },
      },
    });
  }