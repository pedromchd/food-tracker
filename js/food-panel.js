$(function () {
  for (const [foodKey, food] of Object.entries(FOODS)) {
    $("#food-panel").append(`
        <div class="food-card">
          <span class="food-name">${food.alimento}</span>
          <span class="food-portion">Porção: 100g</span>
          <div class="food-image">
            <img
              src="img/foods/${foodKey}.png"
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
          <div class="food-quantity">
            <label for="food-quantity-${foodKey}">
              Quantidade:
            </label>
            <input
              type="text"
              placeholder="0"
              id="food-quantity-${foodKey}"
              data-food="${foodKey}"
              pattern="[0-9]*"
            />
            <span>g</span>
          </div>
        </div>
      `);
  }
});

function vitaminasPrincipais(vitaminas) {
  if (!vitaminas) {
    return "Nenhuma";
  }
  let vitaminasPrincipais = vitaminas.map((vitamina) => {
    return `<span class="food-vitamin">${vitamina}</span>`;
  });
  return vitaminasPrincipais.join("");
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
