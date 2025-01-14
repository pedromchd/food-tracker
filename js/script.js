// Inicializa as variáveis globais
let refeicoesDia = [];
const metaDiaria = {
  proteinas: 200, // Exemplo de meta diária de proteínas
  carboidratos: 300, // Exemplo de meta diária de carboidratos
  gorduras: 70, // Exemplo de meta diária de gorduras
};

// Gráficos gerais
let graficoNutrientes = null;
let graficoDia = null;

// Atualiza o gráfico de barras
function atualizarGraficoNutrientes() {
  const totalProteinas = refeicoesDia.reduce((acc, cur) => acc + cur.proteinas, 0);
  const totalCarboidratos = refeicoesDia.reduce((acc, cur) => acc + cur.carboidratos, 0);
  const totalGorduras = refeicoesDia.reduce((acc, cur) => acc + cur.gorduras, 0);

  const dados = [totalProteinas, totalCarboidratos, totalGorduras];

  if (graficoNutrientes) {
    // Atualiza o gráfico existente
    graficoNutrientes.data.datasets[0].data = dados;
    graficoNutrientes.update();
  } else {
    // Cria o gráfico se ainda não existir
    const ctx = document.getElementById('grafico-nutrientes').getContext('2d');
    graficoNutrientes = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Proteínas', 'Carboidratos', 'Gorduras'],
        datasets: [{
          label: 'Gramas Consumidas',
          data: dados,
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(153, 102, 255, 0.8)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top', labels: { color: '#333' } },
          tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            titleColor: '#333',
            bodyColor: '#333',
            borderWidth: 1,
            borderColor: '#ccc',
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#333' } },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0, 0, 0, 0.1)' },
            ticks: { color: '#333' }
          }
        },
        layout: {
          padding: { top: 20, bottom: 20, left: 20, right: 20 }
        }
      }
    });
  }
}

// Atualiza o gráfico de rosca
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

  if (graficoDia) {
    // Atualiza gráfico de progresso do dia
    graficoDia.data.datasets[0].data = data;
    graficoDia.update();
  } else {
    // Cria o gráfico se não existir
    const ctx2 = document.getElementById("grafico-dia").getContext("2d");
    graficoDia = new Chart(ctx2, {
      type: "doughnut",
      data: {
        labels: ["Proteínas", "Carboidratos", "Gorduras"],
        datasets: [
          {
            data: data,
            backgroundColor: ["#ff6ec4", "#7873f5", "#4bc0c0"],
            borderColor: "#fff",
            borderWidth: 3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: "#fff" },
          },
        },
      },
    });
  }
}

// Adicionar refeição
function adicionarRefeicao(event) {
  event.preventDefault(); // Não recarrega o formulário

  const nomeRefeicao = document.getElementById('nome-refeicao').value;
  const proteinas = parseFloat(document.getElementById('prot-ref').value);
  const carboidratos = parseFloat(document.getElementById('carb-ref').value);
  const gorduras = parseFloat(document.getElementById('gord-ref').value);

  if (!nomeRefeicao || isNaN(proteinas) || isNaN(carboidratos) || isNaN(gorduras)) {
    alert("Por favor, preencha todos os campos corretamente!");
    return;
  }

  const refeicao = { nome: nomeRefeicao, proteinas, carboidratos, gorduras };

  // Adiciona a refeição no array
  refeicoesDia.push(refeicao);

  // Salva as refeições no localStorage
  localStorage.setItem('refeicoesDia', JSON.stringify(refeicoesDia));

  // Atualiza tabela de refeição
  const tabelaRef = document.querySelector("tbody");
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
    <td>${nomeRefeicao}</td>
    <td>${proteinas}</td>
    <td>${carboidratos}</td>
    <td>${gorduras}</td>
  `;
  tabelaRef.appendChild(novaLinha);

  // Atualiza os gráficos
  atualizarGraficoNutrientes();
  atualizarGraficoDia();

  // Reseta os forms
  document.getElementById('refeicao-form').reset();
}

// Recupera as refeições salvas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const refeicoesSalvas = localStorage.getItem('refeicoesDia');
  if (refeicoesSalvas) {
    refeicoesDia = JSON.parse(refeicoesSalvas);

    // Atualiza a tabela com os dados salvos
    const tabelaRef = document.querySelector("tbody");
    refeicoesDia.forEach(refeicao => {
      const novaLinha = document.createElement("tr");
      novaLinha.innerHTML = `
        <td>${refeicao.nome}</td>
        <td>${refeicao.proteinas}</td>
        <td>${refeicao.carboidratos}</td>
        <td>${refeicao.gorduras}</td>
      `;
      tabelaRef.appendChild(novaLinha);
    });
  }

  atualizarGraficoNutrientes();
  atualizarGraficoDia();
});

// Adiciona evento para o formulário
document.getElementById('refeicao-form').addEventListener('submit', adicionarRefeicao);
