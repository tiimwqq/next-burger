export const categories = [
    { name: "Бургеры" },
    { name: "Комбо" },
    { name: "Закуски" },
    { name: "Коктейли" },
    { name: "Кофе" },
    { name: "Напитки" },
    { name: "Десерты" }
]

export const burgerIngredients = [
    { name: "Булочка с кунжутом", price: 49, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/quarter_pounder_bun" },
    { name: "Булочка обыкновенная", price: 49, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/regular_bun" },
    { name: "Котлета говяжья", price: 99, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202111_00006-417__4076_QuarterPound_FreshBeefPatty_1564x1564" },
    { name: "Котлета куриная", price: 89, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/t-crispy-chicken-fillet" },
    { name: "Сыр чеддер", price: 59, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/ingredient_american_cheese_180x180" },
    { name: "измельченный салат", price: 39, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/shredded_lettuce" },
    { name: "Маринованные огурцы", price: 29, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/pickles" },
    { name: "Свежие томаты", price: 49, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/Ingredients_Tomato_180x180" },
    { name: "лук", price: 29, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202110_00028-075__0909_SlicedOnions_1564x1564" },
    { name: "Соус барбекю", price: 19, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202111_02679-243__0912_Ketchup_1564x1564" },
    { name: "Соус горчичный", price: 19, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/DC_Ingredient_202110_00026-041__0910_Mustard_1564x1564" },
    { name: "Острый перец соус", price: 19, imageUrl: "https://s7d1.scene7.com/is/image/mcdonalds/t-original-spicy-sauce" },
].map((obj, i) => ({ id: i + 1, ...obj }));

export const products = [
    { name: 'Омлет с ветчиной и грибами', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp', categoryId: 2 },
    { name: 'Омлет с пепперони', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp', categoryId: 2 },
    { name: 'Кофе Латте', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp', categoryId: 2 },
    { name: 'Дэнвич ветчина и сыр', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp', categoryId: 3 },
    { name: 'Куриные наггетсы', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp', categoryId: 3 },
    { name: 'Картофель из печи с соусом 🌱', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp', categoryId: 3 },
    { name: 'Додстер', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp', categoryId: 3 },
    { name: 'Острый Додстер 🌶️🌶️', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp', categoryId: 3 },
    { name: 'Банановый молочный коктейль', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp', categoryId: 4 },
    { name: 'Карамельное яблоко молочный коктейль', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp', categoryId: 4 },
    { name: 'Молочный коктейль с печеньем Орео', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp', categoryId: 4 },
    { name: 'Классический молочный коктейль 👶', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp', categoryId: 4 },
    { name: 'Ирландский Капучино', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp', categoryId: 5 },
    { name: 'Кофе Карамельный капучино', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp', categoryId: 5 },
    { name: 'Кофе Кокосовый латте', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp', categoryId: 5 },
    { name: 'Кофе Американо', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp', categoryId: 5 },
    { name: 'Кофе Латте', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp', categoryId: 5 }
];