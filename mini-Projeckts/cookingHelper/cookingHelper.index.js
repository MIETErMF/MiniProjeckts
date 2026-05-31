let resultsDiv = document.getElementById('results');
let table1 = document.getElementById('ingredientsTable');
let recipes = [];

async function getRecipe(ingredients, quantity) {
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${quantity}&apiKey=1ab1091e9c814d879c6f24e5e3e7d74e`);
    return await response.json();
}


async function inputFunc() {
    const ingredients = document.getElementById('ingredients').value;
    const quantity = document.getElementById('quantity').value;
    recipes = await getRecipe(ingredients, quantity);
    recipes.filter(obj => {
        const usedIngredients = obj.usedIngredients;
         usedIngredients.filter(someShit => {
            resultsDiv.innerHTML += `${someShit.original} \b\r amount: ${someShit.amount} ${someShit.unitLong}`;

        });



    });
    function tables(usedIngredients, quantity, someShit) {
        table1.querySelector('tbody').innerHTML = data
            .map(cont =>
                `<tr>
                    <td>${usedIngredients}</td>
                </tr>`
            )
            .join("");
    }
}

