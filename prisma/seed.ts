import { burgerIngredients, categories, products } from "./constans"
import { prisma } from "./prisma-client"
import { hashSync } from "bcrypt"
async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "admin",
                email: "admin@example.com",
                password: hashSync("11111111", 10),
                role: "ADMIN",
                verified: new Date()
            },
            {
                fullName: "user",
                email: "user@example.com",
                password: hashSync("11111111", 10),
                role: "USER",
                verified: new Date()
            }
        ]
    })

    await prisma.category.createMany({ data: categories });

    await prisma.ingredient.createMany({ data: burgerIngredients });

    await prisma.product.createMany({ data: products });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmout: 0,
                token: "1111"
            },
            {
                userId: 2,
                totalAmout: 0,
                token: "2222",
            },
        ]
    })






    const burger1 = await prisma.product.create({
        data: {
            name: "воппер",
            description: "Фирменный, сытный бургер с овощами, со 100% говядиной, приготовленной на открытом огне",
            imageUrl: "https://burgerking.kz/uploads/menuproducts/image/1628580583.png",
            ingredients: {
                connect: burgerIngredients.slice(0, 5)
            },
            categoryId: 1
        }
    });

    const burger2 = await prisma.product.create({
        data: {
            name: "Хруст бургер биф",
            imageUrl: "https://burgerking.kz/uploads/menuproducts/image/1690481655.png",
            ingredients: {
                connect: burgerIngredients.slice(3, 7)
            },
            categoryId: 1
        }
    });

    const burger3 = await prisma.product.create({
        data: {
            name: "Двойной Криспи Чикен",
            description: "Сытный куриный бургер со свежими овощами и с двойной хрустящей котлетой в кукурузной булочке.Дополни бургер сыром или халапеньо на вкус.",
            imageUrl: "https://burgerking.kz/uploads/menuproducts/image/1628580921.png",
            ingredients: {
                connect: burgerIngredients.slice(7, 10)
            },
            categoryId: 1
        }
    });

    await prisma.productItem.createMany({
        data: [
            { productId: burger1.id, burgerType: 1, size: "Обычный", price: 1090 },
            { productId: burger1.id, burgerType: 1, size: "Средний", price: 1300 },
            { productId: burger1.id, burgerType: 1, size: "Большой", price: 1990 },

            { productId: burger1.id, burgerType: 2, size: "Обычный", price: 1150 },
            { productId: burger1.id, burgerType: 2, size: "Средний", price: 1400 },
            { productId: burger1.id, burgerType: 2, size: "Большой", price: 2090 },

            { productId: burger1.id, burgerType: 3, size: "Обычный", price: 1200 },
            { productId: burger1.id, burgerType: 3, size: "Средний", price: 1500 },
            { productId: burger1.id, burgerType: 3, size: "Большой", price: 2190 },

            { productId: 1 },
            { productId: 2 },
            { productId: 3 },
            { productId: 4 },
            { productId: 5 },
            { productId: 6 },
            { productId: 7 },
            { productId: 8 },
            { productId: 9 },
            { productId: 10 },
            { productId: 11 },
            { productId: 12 },
            { productId: 13 },
            { productId: 14 },
            { productId: 15 },
            { productId: 16 },
            { productId: 17 },
        ]
    })

    await prisma.productItem.createMany({
        data: [
            { productId: burger2.id, burgerType: 1, size: "Обычный", price: 990 },
            { productId: burger2.id, burgerType: 1, size: "Средний", price: 1240 },
            { productId: burger2.id, burgerType: 1, size: "Большой", price: 1700 },

            { productId: burger2.id, burgerType: 2, size: "Обычный", price: 1050 },
            { productId: burger2.id, burgerType: 2, size: "Средний", price: 1300 },
            { productId: burger2.id, burgerType: 2, size: "Большой", price: 1790 },

            { productId: burger2.id, burgerType: 3, size: "Обычный", price: 1100 },
            { productId: burger2.id, burgerType: 3, size: "Средний", price: 1400 },
            { productId: burger2.id, burgerType: 3, size: "Большой", price: 1890 },
        ]
    })

    await prisma.productItem.createMany({
        data: [
            { productId: burger3.id, burgerType: 1, size: "Обычный", price: 1090 },
            { productId: burger3.id, burgerType: 1, size: "Средний", price: 1350 },
            { productId: burger3.id, burgerType: 1, size: "Большой", price: 1800 },

            { productId: burger3.id, burgerType: 2, size: "Обычный", price: 1150 },
            { productId: burger3.id, burgerType: 2, size: "Средний", price: 1400 },
            { productId: burger3.id, burgerType: 2, size: "Большой", price: 1950 },

            { productId: burger3.id, burgerType: 3, size: "Обычный", price: 1200 },
            { productId: burger3.id, burgerType: 3, size: "Средний", price: 1500 },
            { productId: burger3.id, burgerType: 3, size: "Большой", price: 2100 },
        ]
    })

    await prisma.cartItem.create({
        data: {
            productItemId: 1,
            cartId: 1,
            quantity: 2,
            ingredients: {
                connect: [
                    { id: 1 },
                    { id: 2 },
                    { id: 3 },
                ]
            }
        }
    })
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
        await down()
        await up()
    } catch (e) {
        console.error(e)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })