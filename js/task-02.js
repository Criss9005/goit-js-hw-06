const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")

ingredients.forEach( element => {
    const item = document.createElement("li");
    item.textContent = element;
    ingredientsList.append(item);
    item.classList.add('item')
});
