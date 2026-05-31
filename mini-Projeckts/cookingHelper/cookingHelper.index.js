let table1 = document.getElementById('ingredientsTable');
let recipes = [];

async function getRecipe(ingredients, quantity) {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${quantity}&apiKey=1ab1091e9c814d879c6f24e5e3e7d74e`);
    return await response.json();
}

function formatAmount(value) {
    return Number.isInteger(value) ? value : Math.round(value * 100) / 100;
}

async function inputFunc() {
    const ingredients = document.getElementById('ingredients').value;
    const quantity = document.getElementById('quantity').value;
    const tbody = table1.querySelector('tbody');

    recipes = await getRecipe(ingredients, quantity);

    if (!Array.isArray(recipes) || recipes.length === 0) {
        tbody.innerHTML = `<tr><td colspan="2" class="empty">No recipes found.</td></tr>`;
        return;
    }

    tbody.innerHTML = recipes
        .map(recipe => {
            const used = recipe.usedIngredients
                .map(ing => `
                    <li>
                        <span class="name">${ing.original}</span>
                        <span class="amount">${formatAmount(ing.amount)} ${ing.unitLong || ing.unit}</span>
                    </li>`)
                .join('');
            return `<tr>
                    <td class="recipe-title">${recipe.title}</td>
                    <td><ul class="ingredients">${used}</ul></td>
                </tr>`;
        })
        .join('');
}
