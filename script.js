// Sample Recipe Data
const recipes = [
    {
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with creamy sauce and pancetta.",
        image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg"
    },
    {
        name: "Chicken Salad",
        description: "Healthy and fresh chicken salad with veggies.",
        image: "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-salad-index-6628169554c88.jpg?crop=0.6667863339915036xw:1xh;center,top&resize=1200:*"
    },
    {
        name: "Chocolate Cake",
        description: "Delicious and moist chocolate cake with frosting.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2jWA0VaTu_McECyx9xloy_Socgev8HoIag&s"
    },
    {
        name: "Avocado Toast",
        description: "Simple and tasty avocado toast with spices.",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Pancakes",
        description: "Fluffy pancakes with maple syrup and berries.",
        image: "https://www.inspiredtaste.net/wp-content/uploads/2025/07/Pancake-Recipe-1.jpg"
    },
    {
        name: "Grilled Salmon",
        description: "Perfectly grilled salmon with lemon and herbs.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJy7e7FNp7D3XHt8SSWKZyej_gLn9u60YFFQ&s"
    },
    {
        name: "Beef Tacos",
        description: "Spicy beef tacos with fresh salsa and avocado.",
        image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg"
    },
    {
        name: "Caesar Salad",
        description: "Crisp romaine with Caesar dressing and croutons.",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg"
    },
    {
        name: "Margherita Pizza",
        description: "Classic pizza with tomato, mozzarella, and basil.",
        image: "https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?v=1737104576&width=1080"
    },
    {
        name: "Vegetable Stir Fry",
        description: "Quick stir fry with fresh vegetables and soy sauce.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRueFg0ek3-X08CZqq9NqmjRazYbgX38LvxlQ&s"
    },
    {
        name: "French Toast",
        description: "Golden french toast topped with syrup and berries.",
        image: "https://www.allrecipes.com/thmb/GHsW45mTpy_2EFSjCNEPdeo7Tek=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-16895-fluffy-french-toast-hero-01-ddmfs-4x3-7fd61e054f2c4f0f868b7ab0dd8767ae.jpg"
    },
    {
        name: "Shrimp Scampi",
        description: "Garlic butter shrimp with linguine pasta.",
        image: "https://cdn.jwplayer.com/v2/media/hPcMnXp7/thumbnails/mCITeuJc.jpg"
    },
    
];


// DOM Elements
const recipesContainer = document.getElementById('recipesContainer');
const searchInput = document.getElementById('searchInput');

// Display Recipes
function displayRecipes(filteredRecipes) {
    recipesContainer.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
            </div>
        </div>
    `).join('');
}

// Initial Display
displayRecipes(recipes);

// Search Functionality
searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchText));
    displayRecipes(filteredRecipes);
});
