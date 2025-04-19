import { categories, sushiSets, sushiIngredients, rollTypes } from "./constans"
import { prisma } from "./prisma-client"
async function up() {

    await prisma.category.createMany({ data: categories });
    await prisma.rollType.createMany({ data: rollTypes });
    await prisma.ingredient.createMany({ data: sushiIngredients });

    const createdProducts = await Promise.all(
        sushiSets.map(async (set) => {
            return await prisma.product.create({
                data: {
                    name: set.name,
                    description: set.description,
                    imageUrl: set.imageUrl,
                    categoryId: 1,
                },
            });
        })
    );


    await prisma.productItem.createMany({
        data: createdProducts.map((product, index) => ({
            productId: product.id,
            size: "стандартный",
            price: sushiSets[index].price,
        })),
    });

    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmout: 0,
                token: "1111",
            },
            {
                userId: 2,
                totalAmout: 0,
                token: "2222",
            },
        ],
    });


    const firstProductItem = await prisma.productItem.findFirst({
        where: { productId: createdProducts[0].id },
    });

    if (!firstProductItem) {
        throw new Error('Product item not found');
    }


    await prisma.cartItem.create({
        data: {
            productItemId: firstProductItem.id,
            cartId: 1,
            quantity: 2,
        },
    });
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "RollType" RESTART IDENTITY CASCADE`;
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