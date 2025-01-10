$(function () {
  $("main").text("Food Panel");
  $.get("data/foods.csv", (data) => {
    foods = $.csv.toObjects(data);
    console.table(foods);
  });
});
